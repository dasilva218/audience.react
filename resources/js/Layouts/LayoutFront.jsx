import FooterFront from "@/Components/FooterFront";
import NavFront from "@/Components/NavFront";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

function LayoutFront({ children }) {
    return (
        <main className="flex-shrink-0">
            <Head>
                <link rel="shortcut icon" href="/icon.ico" type="image/x-icon" />
            </Head>
            <NavFront />
            {children}
            <FooterFront />
        </main>
    );
}

export default LayoutFront;
