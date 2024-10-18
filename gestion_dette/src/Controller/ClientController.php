<?php

namespace App\Controller;

use App\DTO\ClientDTO;
use App\Entity\Client;
use App\Entity\Users;
use App\Form\ClientType;
use App\Form\SearchClientType;
use App\Form\UserType;
use App\Repository\ClientRepository;
use App\Repository\DetteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

use function PHPUnit\Framework\isNull;

class ClientController extends AbstractController
{
    #[Route('/client/{telephone?}', name: 'client.index', methods: ['GET', 'POST'])]
    public function index(Request $request, ClientRepository $clientRepository): Response
    {
        $formSearch = $this->createForm(SearchClientType::class, null, [
            'method' => 'GET',
        ]);
        $formSearch->handleRequest($request);

        $page = $request->query->getInt('page', 1);
        $limit = 4;

        $totalClients = $clientRepository->count([]);
        $totalPages = ceil($totalClients / $limit);

        if ($formSearch->isSubmitted($request) && $formSearch->isValid()) {
            // dd($request->query);
            $telephone = $formSearch->get('telephone')->getData();

            $clients = $clientRepository->paginateClient($page, $limit, $telephone);
            $page = 1;
            $totalPages = 1;
        } else {
            $clients = $clientRepository->paginateClient($page, $limit);
        }

        return $this->render('client/index.html.twig', [
            'clients' => $clients,
            'formSearch' => $formSearch->createView(),
            'currentPage' => $page,
            'totalPages' => $totalPages,
        ]);
    }

    #[Route('/client/create', name: 'client.create', methods: ['GET', 'POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $client = new Client();
        $users = new Users();

        $formClient = $this->createForm(ClientType::class, $client);
        $formUser = $this->createForm(UserType::class, $users);

        $formClient->handleRequest($request);


        if ($formClient->isSubmitted() && $formClient->isValid()) {

            if ($request->get('toggleSwitch') === 'on' && $formUser->isValid()) {

                $formUser->handleRequest($request);
                $users->setBlocked(false);

                $entityManager->persist($users);
                $client->setUsers($users);
            }

            $entityManager->persist($client);
            $entityManager->flush();

            return $this->redirectToRoute('client.index');
        }

        // Rendu du template avec les formulaires
        return $this->render('client/form.html.twig', [
            'formClient' => $formClient->createView(),
            'formUser' => $formUser->createView(),
        ]);
    }


    #[Route('/client/show/{id?}', name: 'client.show', methods: ['GET'])]
    public function show(Request $request, DetteRepository $detteRepository, ClientRepository $clientRepository): Response
    {

        $id = $request->attributes->getInt('id');
        $client = $clientRepository->find($id);
        // dd($client);
        $dettes = $detteRepository->findByCientId($id);
        return $this->render('client/dette.client.html.twig', [
            'dettes' => $dettes,
            'client' => $client
        ]);
    }


    #[Route('/client/show/{id?}/{etat?}', name: 'client.showDette', methods: ['GET'])]
    public function showByEtat(Request $request, DetteRepository $detteRepository, ClientRepository $clientRepository): Response
    {

        $id = $request->attributes->getInt('id');
        $client = $clientRepository->find($id);
        $etat = $request->attributes->getInt('etat');
        // dd($id);
        $dettes = $detteRepository->findDetteClientEtat($id, $etat);

        return $this->render('client/dette.client.html.twig', [
            'dettes' => $dettes,
            'client' => $client
        ]);
    }
}