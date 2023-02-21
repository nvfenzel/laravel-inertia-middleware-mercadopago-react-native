<?php

namespace App\Http\Controllers;

use App\Helpper\UserService;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $response = (new UserService($request->email, $request->password))->register($request->deviceName);
        return response()->json($response);
    }

    public function login(Request $request)
    {
        // $user = User::create([
        //     'name' => 'culito',
        //     'email' => $request->email,
        //     'count' => 'is_user',
        //     'password' =>  Hash::make($request->password),
        // ]);
        // return response()->json($response);
    }
}
