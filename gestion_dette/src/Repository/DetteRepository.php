<?php

namespace App\Repository;

use App\Entity\Dette;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Dette>
 */
class DetteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Dette::class);
    }

    public function paginateDette(int $page, int $limit, int $etat = 3): Paginator
    {
        // Création du QueryBuilder pour récupérer les dettes du client spécifié
        $qb = $this->createQueryBuilder('d')
            ->setFirstResult(($page - 1) * $limit)  // Pagination
            ->setMaxResults($limit)
            ->orderBy('d.id', 'ASC');

        // Filtrage selon l'état
        if ($etat == 1) {
            // Dette soldée (montant égal au montant versé)
            $qb->andWhere('d.montant = d.montantVerser');
        } elseif ($etat == 2) {
            // Dette non soldée (montant différent du montant versé)
            $qb->andWhere('d.montant != d.montantVerser');
        }

        // Exécution de la requête
        $finalQuery = $qb->getQuery();

        // Retourne un Paginator pour gérer les résultats avec pagination
        return new Paginator($finalQuery);
    }

    public function countByEtat(int $etat): int
    {
        $qb = $this->createQueryBuilder('d')
            ->select('COUNT(d.id)');

        // Appliquer le filtre d'état
        if ($etat == 1) {
            $qb->andWhere('d.montant = d.montantVerser'); // Dette soldée
        } elseif ($etat == 2) {
            $qb->andWhere('d.montant != d.montantVerser'); // Dette non soldée
        }

        return (int) $qb->getQuery()->getSingleScalarResult();
    }

    //    /**
    //     * @return Dette[] Returns an array of Dette objects
    //     */
    public function findByCientId(int $id): array
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.client = :val')
            ->setParameter('val', $id)
            ->orderBy('d.id', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }

    public function findDetteClientEtat(int $id, int $etat = 3): array
    {
        $qb = $this->createQueryBuilder('d')
            ->andWhere('d.client = :val')
            ->setParameter('val', $id)
            ->orderBy('d.id', 'ASC');

        if ($etat == 1) {
            return $qb->andWhere('d.montant = d.montantVerser')->getQuery()->getResult();
        } elseif ($etat == 2) {
            return $qb->andWhere('d.montant != d.montantVerser')->getQuery()->getResult();
        } else {
            return $qb->getQuery()->getResult();
        }
    }

    public function findDetteByEtat(int $id, int $etat = 3): array
    {
        $qb = $this->createQueryBuilder('d')
            ->andWhere('d.client = :val')
            ->setParameter('val', $id)
            ->orderBy('d.id', 'ASC');

        if ($etat == 1) {
            return $qb->andWhere('d.montant = d.montantVerser')->getQuery()->getResult();
        } elseif ($etat == 2) {
            return $qb->andWhere('d.montant != d.montantVerser')->getQuery()->getResult();
        } else {
            return $qb->getQuery()->getResult();
        }
    }

    //    public function findOneBySomeField($value): ?Dette
    //    {
    //        return $this->createQueryBuilder('d')
    //            ->andWhere('d.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
