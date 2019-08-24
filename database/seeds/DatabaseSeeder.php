<?php

use Illuminate\Database\Seeder;
use App\Project;
use App\Task;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(Project::class, 10)->create();
        factory(Task::class,50)->create();
    }
}
