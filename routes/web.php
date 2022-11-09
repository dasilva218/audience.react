<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get("/accueil", function () {
    return Inertia::render('Front/Home', []);
});

Route::get("/audience", function () {
    return Inertia::render('Front/Audience', []);
})->name('formulaire');

Route::get("/apropos", function () {
    return Inertia::render('Front/About', []);
})->name('about');

Route::get("/aide", function () {
    return Inertia::render('Front/Help', []);
})->name('help');

Route::get("/contact", function () {
    return Inertia::render('Front/Contact', []);
})->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
