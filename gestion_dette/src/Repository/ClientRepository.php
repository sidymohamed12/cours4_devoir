<?php

namespace App\Repository;

use App\Entity\Client;
use App\Entity\Users;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Client>
 */
class ClientRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Client::class);
    }

    public function createClient(string $telephone, string $adresse, string $surnom, Users $user = null): Client
    {
        // Créer une nouvelle instance de Client
        $client = new Client();
        $client->setTelephone($telephone);
        $client->setAdresse($adresse);
        $client->setSurnom($surnom);
        $client->setCreatedAt(new \DateTimeImmutable());
        $client->setUpdatedAt(new \DateTimeImmutable());
        if ($user != null) {
            $client->setUsers($user);
        } else {
            $client->setUsers(null);
        }

        // Persister l'entité dans la base de données
        $this->entityManager->persist($client);
        $this->entityManager->flush();

        return $client;
    }

    // ------------------------------------
    public function paginateClient(int $page, int $limit, string $telephone = ''): Paginator
    {

        $query = $this->createQueryBuilder('c')
            ->setFirstResult(($page - 1) * $limit)
            ->setMaxResults($limit)
            ->orderBy('c.id', 'ASC');

        if (!empty($telephone)) {
            $query->andWhere('c.telephone LIKE :telephone')
                ->setParameter('telephone', '%' . $telephone . '%');
        }

        $finalQuery = $query->getQuery();

        return new Paginator($finalQuery);
    }


    //    /**
    //     * @return Client[] Returns an array of Client objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('c.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Client
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}