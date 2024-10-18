<?php

namespace App\Controller;

use App\Repository\DetteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DetteController extends AbstractController
{
    #[Route('/dette', name: 'dette.index')]
    public function index(Request $request, DetteRepository $detteRepository): Response
    {
        $page = $request->query->getInt('page', 1);
        $limit = 4;

        $etat = $request->query->getInt('etat', 3);

        $totalDettes = $detteRepository->countByEtat($etat);
        $totalPages = ceil($totalDettes / $limit);

        $dettes = $detteRepository->paginateDette($page, $limit, $etat);

        return $this->render('dette/index.html.twig', [
            'dettes' => $dettes,
            'currentPage' => $page,
            'totalPages' => $totalPages,
            'etat' => $etat,
        ]);
    }
}