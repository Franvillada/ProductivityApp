  <?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Project;
use Faker\Generator as Faker;

$factory->define(Project::class, function (Faker $faker) {
    return [
        'title' => $faker->word,
        'description' => $faker->text($maxNbChars = 200),
        'standby' => $faker->numberBetween($min = 0, $max = 1),
        'is_completed' => $faker->numberBetween($min = 0, $max = 1),
    ];
});
