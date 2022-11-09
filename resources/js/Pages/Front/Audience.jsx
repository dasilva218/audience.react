import LayoutFront from "@/Layouts/LayoutFront";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

const Audience = () => {
    return (
        <LayoutFront>
            <Head title="formulaire"/>
            <section class="py-5">
                <div class="container px-8">
                    <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div class="text-center mb-5">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                <i class="bi bi-file-text"></i>
                            </div>
                            <h1 class="fw-bolder">
                                Envoyez votre demande d'audience
                            </h1>
                            <p class="lead fw-normal text-muted mb-0">
                                Saisissez vos informations et importez votre
                                demande
                            </p>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-8 col-xl-6">
                                <form>
                                    <div class="row g-2">
                                        <div class="col-md">
                                            <div class="form-floating mb-3">
                                                <select
                                                    name="civilite"
                                                    class="form-select"
                                                    id="floatingSelectGrid"
                                                    aria-label="Floating label select example"
                                                >
                                                    <option
                                                        disabled="disabled"
                                                        selected
                                                    >
                                                        Civilité
                                                    </option>
                                                    <option>Monsieur</option>
                                                    <option>Madame</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md">
                                            <div class="form-floating mb-3">
                                                <select
                                                    name="audience"
                                                    class="form-select"
                                                    id="floatingSelectGrid"
                                                    aria-label="Floating label select example"
                                                >
                                                    <option
                                                        disabled="disabled"
                                                        selected
                                                    >
                                                        Type d'audience
                                                    </option>
                                                    <option>
                                                        En présentiel
                                                    </option>
                                                    <option>
                                                        En visioconférence
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <select
                                            name="subject"
                                            class="form-select"
                                            aria-label="Default select"
                                            required="required"
                                        >
                                            <option selected disabled="">
                                                Choisir un destinataire
                                            </option>

                                            <option></option>
                                        </select>
                                        <div
                                            class="invalid-feedback"
                                            data-sb-feedback="name:required"
                                        >
                                            Veuillez choisir un destinataire..
                                        </div>
                                    </div>

                                    <div class="row g-2">
                                        <div class="col-md">
                                            <div class="form-floating mb-3">
                                                <input
                                                    name="first_name"
                                                    class="form-control"
                                                    id="name"
                                                    type="text"
                                                    data-sb-validations="required"
                                                />
                                                <label for="name">
                                                    Prénoms
                                                </label>
                                                <div
                                                    class="invalid-feedback"
                                                    data-sb-feedback="name:required"
                                                >
                                                    Veuillez saisir au moins un
                                                    prénom.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md">
                                            <div class="form-floating mb-3">
                                                <input
                                                    name="nom"
                                                    class="form-control"
                                                    id="name"
                                                    type="text"
                                                    data-sb-validations="required"
                                                />
                                                <label for="name">Noms</label>
                                                <div
                                                    class="invalid-feedback"
                                                    data-sb-feedback="name:required"
                                                >
                                                    Veuillez saisir au moins un
                                                    nom.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input
                                            name="statut"
                                            class="form-control"
                                            id="name"
                                            type="text"
                                            data-sb-validations="required"
                                        />
                                        <label for="name">Fonction</label>
                                        <div
                                            class="invalid-feedback"
                                            data-sb-feedback="name:required"
                                        >
                                            Veuillez saisir votre fonction.
                                        </div>
                                    </div>

                                    <div class="row g-2">
                                        <div class="col-md">
                                            <div class="form-floating mb-3">
                                                <input
                                                    name="telephone"
                                                    class="form-control"
                                                    id="name"
                                                    type="tel"
                                                    data-sb-validations="required"
                                                />
                                                <label for="name">
                                                    N° Téléphone
                                                </label>
                                                <div
                                                    class="invalid-feedback"
                                                    data-sb-feedback="name:required"
                                                >
                                                    Veuillez saisir un numéro.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md">
                                            <div class="form-floating mb-3">
                                                <input
                                                    name="phone"
                                                    class="form-control"
                                                    id="name"
                                                    type="tel"
                                                    data-sb-validations="required"
                                                />
                                                <label for="name">
                                                    N° Burreau
                                                </label>
                                                <div
                                                    class="invalid-feedback"
                                                    data-sb-feedback="name:required"
                                                >
                                                    Veuillez saisir un second
                                                    numéro.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input
                                            name="email"
                                            class="form-control"
                                            id="email"
                                            type="email"
                                            data-sb-validations="required,email"
                                        />
                                        <label for="email">
                                            Addresse email
                                        </label>
                                        <div
                                            class="invalid-feedback"
                                            data-sb-feedback="email:required"
                                        >
                                            Veuillez saisir votre email.
                                        </div>
                                        <div
                                            class="invalid-feedback"
                                            data-sb-feedback="email:email"
                                        >
                                            Email invalide.
                                        </div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input
                                            name="objet"
                                            class="form-control"
                                            id="name"
                                            type="text"
                                            data-sb-validations="required"
                                        />
                                        <label for="name">Objet</label>
                                        <div
                                            class="invalid-feedback"
                                            data-sb-feedback="name:required"
                                        >
                                            Veuillez saisir l'odjet.
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label
                                            
                                            class="mb-1"
                                            for="file"
                                        >
                                            Votre demande en PDF
                                        </label>
                                        <input
                                            name="userfile"
                                            class="form-control"
                                            id="phone"
                                            type="file"
                                            accept=".pdf"
                                            data-sb-validations="required"
                                        />
                                        <div
                                            class="invalid-feedback"
                                            data-sb-feedback="phone:required"
                                        >
                                            Veuillez importer votre demande en
                                            PDF.
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label
                                            
                                            class="mb-1"
                                            for="file"
                                        >
                                            Pièce jointe (facultative)
                                        </label>
                                        <input
                                            name="userfile2"
                                            class="form-control"
                                            id="phone"
                                            type="file"
                                            accept=".pdf"
                                        />
                                    </div>

                                    <div class="form-floating mb-3">
                                        <textarea
                                            name="note"
                                            class="form-control"
                                            id="message"
                                            type="text"
                                            placeholder="Enter your message here..."
                                            
                                            data-sb-validations="required"
                                        ></textarea>
                                        <label for="message">
                                            Message court
                                        </label>
                                        <div
                                            class="invalid-feedback"
                                            maxlength=""
                                            data-sb-feedback="message:required"
                                        >
                                            Veuillez saisir un message.
                                        </div>
                                    </div>

                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="gridCheck required"
                                        />
                                        <label
                                            class="form-check-label mb-4"
                                            for="gridCheck"
                                        >
                                            J'ai lu et j'accepte la{" "}
                                            <a href="">
                                                {" "}
                                                politique de confidentialité{" "}
                                            </a>{" "}
                                            et les
                                            <a href="">
                                                {" "}
                                                conditions d'utilisation
                                            </a>
                                            .
                                        </label>
                                    </div>

                                    <div
                                        class="d-none"
                                        id="submitSuccessMessage"
                                    >
                                        <div class="text-center mb-3">
                                            <div
                                                
                                                class="fw-bolder"
                                            >
                                                Votre demande d'audience a été
                                                envoyé avec succès!
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-none" id="submitErrorMessage">
                                        <div class="text-center text-danger mb-3">
                                            Une erreur c'est produite lors de
                                            l'envoi de votre message!
                                        </div>
                                    </div>

                                    <div class="d-grid">
                                      
                                        <button
                                            class="btn btn-primary btn-lg disabled "
                                            id="submitButton"
                                            type="submit"
                                        >
                                            J'envoie ma demande
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutFront>
    );
};

export default Audience;
