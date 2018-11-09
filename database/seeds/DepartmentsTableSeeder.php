<?php

use Illuminate\Database\Seeder;
use App\Department;

class DepartmentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Department::create([
            'name'=>'Web'
        ]);

        Department::create([
            'name'=>'Creatives'
        ]);
    }
}
