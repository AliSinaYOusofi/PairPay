import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
    return (
        <footer className="border-t bg-background py-12">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div>
                        {/* <h3 className="text-lg font-medium">PairPay</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Track shared expenses across multiple currencies
                            with ease.
                        </p> */}
                        {/* <div className="mt-4 flex space-x-4">
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div> */}
                    </div>
                    {/* <div>
                        <h3 className="text-lg font-medium">Product</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Resources</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Guides
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    API Documentation
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Legal</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className="mt-8 border-t pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} PairPay. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
