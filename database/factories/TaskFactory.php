<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Task;
use Faker\Generator as Faker;

$factory->define(Task::class, function (Faker $faker) {
    return [
        'description' =>$faker->text($maxNbChars = 200),
        'is_completed' =>$faker->numberBetween($min = 0, $max = 1),
        'is_critical' =>$faker->numberBetween($min = 0, $max = 1),
        'project_id' =>$faker->numberBetween($min = 1, $max = 10),
    ];
});
