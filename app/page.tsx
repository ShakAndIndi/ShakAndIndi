import Image from "next/image";
import {Button} from "@headlessui/react";
import {SocialIcon} from "react-social-icons";

const ExternalLink = ({
    href,
    title
}:{
    href: string
    title?: string
}) => (
    <a href={href} target='_blank' rel="noopener noreferrer">
        <Button className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white  focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        {/*<Button className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">*/}
            <SocialIcon url={href} />
            { title && <p>{title}</p>}
        </Button>
    </a>
)

export default function Home() {
    return (
        <main className="flex flex-col min-h-dvh items-center justify-center gap-10 bg-slate-800">
            <h1>Shak & Indi</h1>
            <div className="relative flex flex-col gap-8 place-items-center  ">
                <div className="flex gap-2">
                    <ExternalLink href="https://www.facebook.com/shakandindi/" />
                    <ExternalLink href="https://www.instagram.com/shakandindi/?igsh=Y3Nxb2QwOTAxcnFm"/>
                    <ExternalLink href="https://www.tiktok.com/@shakandindi"/>
                    <ExternalLink href="https://www.youtube.com/@ShakandIndi"/>
                </div>
                <div className="flex flex-col gap- items-center">
                    <h2>Podcast</h2>
                    <div className="flex gap-2">
                        <ExternalLink href="https://open.spotify.com/show/3aHVSOhT1dvqyhWZM1bW7E"/>
                        <ExternalLink href="https://podcasts.apple.com/us/podcast/where-the-f-k-is-the-line/id1760561860"/>
                        <ExternalLink href="https://feeds.buzzsprout.com/2389852.rss" />
                        <ExternalLink href="https://music.youtube.com/playlist?list=PLXAP8sibOzHTeIbWbW9no07IVLmkDp9_z" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center mt-10">
                    <h2>🌶️🌶️🌶️</h2>
                    {/*<a href="https://pay.airwallex.com/sggyjvbmuqki" target='_blank' rel="noopener noreferrer">*/}
                    {/*    <Button*/}
                    {/*        className="inline-flex items-center gap-2 rounded-md bg-amber-600 py-1.5 px-3 text-lg font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-orange-500 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">*/}
                    {/*        Donate*/}
                    {/*    </Button>*/}
                    {/*</a>*/}
                    <div className="flex gap-2">
                        <ExternalLink href="https://www.reddit.com/user/ShakAndIndi/"/>
                    </div>
                </div>


            </div>

        </main>
    );
}
