<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [UserController::class, 'register']);

Route::post(
    'login',
    function (Request $request) {


        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return response()->json($user->createToken($request->device_name)->plainTextToken);


        // $loginDetails = $request->only('email', 'password');

        // if (Auth::attempt($loginDetails)) {
        //     return response()->json(['message' => 'Buen inicio de sesión', 'code' => 200]);
        // } else {
        //     return response()->json(['message' => 'wrong login details', 'code' => 501]);
        // }
    }
);
//  [UserController::class, 'login']);


// [UserController::class, 'login']);

Route::middleware('auth:sanctum')->get('data', function () {
    return response()->json('Hello Nicolassss', 200);
});
