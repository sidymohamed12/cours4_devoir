<?php

namespace App\Form;

use App\Entity\Client;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\NotNull;


class ClientType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('telephone', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'mt-2 block w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm',
                    'placeholder' => 'Téléphone',
                ],
                'label' => 'Téléphone',
            ])
            ->add('adresse', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'mt-2 block w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm',
                    'placeholder' => 'adresse',
                ],
                'label' => 'adresse',
            ])
            ->add('surnom', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'mt-2 block w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm',
                    'placeholder' => 'surnom',
                ],
                'label' => 'Surnom',
            ])

            ->add('save', SubmitType::class, [
                'attr' => [
                    'class' => 'mt-3 mb-3 px-8 py-2 text-sm font-medium text-gray-900 rounded-lg bg-white ',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Client::class,
        ]);
    }
}