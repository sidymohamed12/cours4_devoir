<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\NotNull;

class SearchUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('login', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500',
                    'placeholder' => 'Search an user by login',
                    'name' => 'login',
                ],
                'constraints' => [
                    new NotBlank(),
                    new NotNull()
                ]
            ])

            ->add('search', SubmitType::class, [
                'attr' => [
                    'class' => 'text-white ml-3 bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm px-6 py-1 text-center mb-1',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}