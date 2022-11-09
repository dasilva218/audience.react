import LayoutFront from "@/Layouts/LayoutFront";
import React from "react";

const Contact = () => {
    return (
        <LayoutFront>
            <section class="py-5">
                <div class="container px-8">
                    <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div class="text-center mb-5">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                <i class="bi bi-envelope"></i>
                            </div>
                            <h1 class="fw-bolder">Ecrivez-nous</h1>
                            <p class="lead fw-normal text-muted mb-0">
                                Nous sommes impatients
                            </p>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-8 col-xl-6">
                                <form
                                    id="contactForm"
                                    data-sb-form-api-token="API_TOKEN"
                                >
                                    <div class="form-floating mb-3">
                                        <input
                                            class="form-control"
                                            id="name"
                                            type="text"
                                            data-sb-validations="required"
                                        />
                                        <label for="name">Noms complet</label>
                                        <div
                                            class="invalid-feedback"
                                            data-sb-feedback="name:required"
                                        >
                                            Veuillez saisir votre nom.
                                        </div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input
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
                                            class="form-control"
                                            id="phone"
                                            type="text"
                                            data-sb-validations="required"
                                        />
                                        <label for="phone">Objet</label>
                                        <div
                                            class="invalid-feedback"
                                            data-sb-feedback="phone:required"
                                        >
                                            Veuillez renseigner un objet.
                                        </div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <textarea
                                            class="form-control"
                                            id="message"
                                            type="text"
                                            
                                            data-sb-validations="required"
                                        ></textarea>
                                        <label for="message">Message</label>
                                        <div
                                            class="invalid-feedback"
                                            maxlength=""
                                            data-sb-feedback="message:required"
                                        >
                                            Veuillez saisir un message.
                                        </div>
                                    </div>

                                    <div
                                        class="d-none"
                                        id="submitSuccessMessage"
                                    >
                                        <div class="text-center mb-3">
                                            <div class="fw-bolder alert alert-success">
                                                Votre message a été envoyé avec
                                                succès !
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-none" id="submitErrorMessage">
                                        <div class="text-center text-danger mb-3">
                                            Une erreur c'est produite lors de
                                            l'envoi de votre demannde!
                                        </div>
                                    </div>

                                    <div class="d-grid">
                                        <button
                                            class="btn btn-primary btn-lg disabled"
                                            id="submitButton"
                                            type="submit"
                                        >
                                            Envoyer
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

export default Contact;
