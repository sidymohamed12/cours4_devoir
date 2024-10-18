<?php

namespace App\Controller;

use App\Entity\Users;
use App\Form\SearchUserType;
use App\Form\UserType;
use App\Repository\UsersRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class UsersController extends AbstractController
{
    #[Route('/users', name: 'users.index')]
    public function index(Request $request, UsersRepository $usersRepository): Response
    {
        $formSearch = $this->createForm(SearchUserType::class, null, [
            'method' => 'GET',
        ]);
        $formSearch->handleRequest($request);
        if ($formSearch->isSubmitted($request) && $formSearch->isValid()) {
            $login = $formSearch->get('login')->getData();
            $users = $usersRepository->paginateUser(1, 10, $login);
        } else {
            $users = $usersRepository->paginateUser(1, 10);
        }
        return $this->render('users/index.html.twig', [
            'users' => $users,
            'formSearch' => $formSearch->createView(),
        ]);
    }

    #[Route('/user/create', name: 'user.create', methods: ['GET', 'POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $users = new Users();
        $formUser = $this->createForm(UserType::class, $users);
        $formUser->handleRequest($request);
        if ($formUser->isSubmitted() && $formUser->isValid()) {
            $users->setBlocked(false);
            $entityManager->persist($users);
            $entityManager->flush();
            return $this->redirectToRoute('users.index');
        }
        return $this->render('users/form.html.twig', [
            'formUser' => $formUser->createView(),
        ]);
    }
}