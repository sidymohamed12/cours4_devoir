<?php

namespace App\DataFixtures;

use App\Entity\Dette;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class DetteFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $dette = new Dette();
        // $dette->setMontant(1000);
        // $dette->setMontantVerser(800);

        // $dette->setClient($this->getReference('client-1'));
        // $manager->persist($dette);

        $manager->flush();
    }
}