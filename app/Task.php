<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    public function projects(){
        return $this->belongsTo(Projecct::class);
    }
}
