<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('products')->insert([
            [
                'name' => 'Mindset',
                'type' => 'Psychology',
                'quantity' => 25,
                'price' => 100000
            ],
            [
                'name' => 'Hidden World',
                'type' => 'Fiction',
                'quantity' => 12,
                'price' => 78000
            ],
            [
                'name' => 'Fly Me to The Moon',
                'type' => 'Comic',
                'quantity' => 75,
                'price' => 20000
            ],
        ]);
    }
}
