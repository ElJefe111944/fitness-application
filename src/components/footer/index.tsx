import Logo from "@/assets/Logo.png"


function Footer() {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo" />
                    <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatem eligendi odit autem asperiores beatae earum culpa obcaecati distinctio debitis molestias similique rerum nisi accusantium sunt, perferendis sequi ducimus exercitationem?</p>
                    <p>&copy; Evogym All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-4">Quas voluptatem eligendi odit</p>
                    <p className="my-4">Autem asperiores beatae</p>
                    <p className="my-4">Obcaecati distinctio debitis</p>
                    <p className="my-4">Sequi ducimus exercitationem?</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-4">Quas voluptatem eligendi odit</p>
                    <p className="my-4">(333)425-6825</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer