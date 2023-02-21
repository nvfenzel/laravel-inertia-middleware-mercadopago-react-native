<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Home>
 */
class HomeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'navigation_one' => fake()->name(),
            'navigation_two' => fake()->name(),
            'navigation_tree' => fake()->name(),
            'navigation_four' => fake()->name(),
            'navigation_five' => fake()->name(),
            'navigation_six' => fake()->name(),
            'navigation_seven' => fake()->name(),
            'navigation_eight' => fake()->name(),
            'navigation_nine' => fake()->name(),
        ];
    }
}
