<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('homes', function (Blueprint $table) {
            $table->id();
            $table->string('navigation_one');
            $table->string('navigation_two');
            $table->string('navigation_tree');
            $table->string('navigation_four');
            $table->string('navigation_five');
            $table->string('navigation_six');
            $table->string('navigation_seven');
            $table->string('navigation_eight');
            $table->string('navigation_nine');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('homes');
    }
};
