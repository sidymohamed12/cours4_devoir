<?php

namespace App\DTO;

use App\Entity\Users;
use phpDocumentor\Reflection\Types\Boolean;
use phpDocumentor\Reflection\Types\Nullable;

class ClientDTO
{
    private string $telephone;

    private string $adresse;

    private string $surnom;

    // private Boolean $compte;

    private ?Users $users;

    public function __construct(string $telephone, string $adresse, string $surnom, Users $users = null)
    {
        $this->telephone = $telephone;
        $this->adresse = $adresse;
        $this->surnom = $surnom;
        $this->users = $users;
    }

    public function getTelephone(): string
    {
        return $this->telephone;
    }

    public function getAdresse(): string
    {
        return $this->adresse;
    }

    public function getSurnom(): string
    {
        return $this->surnom;
    }

    public function getUsers(): ?Users
    {
        return $this->users;
    }
}