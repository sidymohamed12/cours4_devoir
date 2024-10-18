<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ArticleController extends AbstractController
{
    #[Route('/article', name: 'article.index')]
    public function index(Request $request, ArticleRepository $articleRepository): Response
    {
        $page = $request->query->getInt('page', 1);
        $limit = 4;

        $totalArticles = $articleRepository->count([]);
        $totalPages = ceil($totalArticles / $limit);
        $articles = $articleRepository->paginateClient($page, $limit);
        return $this->render('article/index.html.twig', [
            'articles' => $articles,
            'currentPage' => $page,
            'totalPages' => $totalPages,
        ]);
    }
}
