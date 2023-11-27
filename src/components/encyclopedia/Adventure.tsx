import React from "react";
import clsx from "clsx";
import CampaignModal from "../modal/campaignModal";
import { OpenModal } from "@/redux/monsterSlice";
import { useAppSelector, useAppDispatch } from '../../redux/hook';
// import Hexable from "@/components/encyclopedia/Hexable";
import styles from "@/styles/Monster.module.css";


export default function Adventure() {
    const dispatch = useAppDispatch();
    const handleOpenModal = () => {
        dispatch(OpenModal());
    }
    return (
        <div className="col-span-12  md:col-span-12 lg:col-span-5 flex p-[16px] flex-col justify-center items-center  gap-[56px] rounded-[14px] bg-[#18181B80]">
            <div className={clsx("w-full flex justify-center items-center", styles["monster-hexagon-field"])} >
                <div className=" w-[422px] h-[390px] py-[20px]" style={{ position: "relative" }}>
                    <svg style={{ position: "absolute", left: "263.7px" }} xmlns="http://www.w3.org/2000/svg" width="106" height="123" viewBox="0 0 106 123" fill="none">
                        <path d="M47.0937 2.04571L5.17691 27.2999C2.39577 28.9755 0.695312 31.9852 0.695312 35.2321V88.445C0.695312 91.7221 2.42736 94.7553 5.24979 96.4207L46.9299 121.014C49.8912 122.762 53.577 122.725 56.5024 120.918L101.255 93.2765C103.986 91.5894 105.649 88.608 105.649 85.3976V35.3781C105.649 32.0527 103.866 28.9827 100.978 27.3347L56.4622 1.93454C53.5496 0.27263 49.9661 0.315155 47.0937 2.04571Z" fill="#8B3C91" />
                    </svg>
                    <svg style={{ position: "absolute", top: '147.7px', left: '325.43px' }} xmlns="http://www.w3.org/2000/svg" width="85" height="98" viewBox="0 0 85 98" fill="none">
                        <path d="M37.5494 1.18051L4.01594 21.3839C1.79103 22.7244 0.430664 25.1321 0.430664 27.7297V70.3C0.430664 72.9217 1.81631 75.3482 4.07426 76.6805L37.4183 96.3556C39.7874 97.7535 42.736 97.7237 45.0764 96.2782L80.8784 74.1652C83.0635 72.8155 84.3938 70.4304 84.3938 67.862V27.8464C84.3938 25.1861 82.9674 22.7301 80.6568 21.4117L45.0442 1.09158C42.7141 -0.23795 39.8473 -0.203933 37.5494 1.18051Z" fill="#8B3C91" />
                    </svg>
                    <svg style={{ position: "absolute", top: '238.04px', left: '202.6px' }} xmlns="http://www.w3.org/2000/svg" width="173" height="190" viewBox="0 0 173 190" fill="none">
                        <g filter="url(#filter0_d_1564_4446)">
                            <path d="M80.1977 33.0376L39.0004 57.8584C36.267 59.5052 34.5957 62.4633 34.5957 65.6544V117.954C34.5957 121.175 36.298 124.156 39.072 125.793L80.0367 149.964C82.9473 151.682 86.5697 151.645 89.445 149.869L133.429 122.703C136.114 121.044 137.748 118.114 137.748 114.959V65.7979C137.748 62.5296 135.996 59.5123 133.157 57.8925L89.4054 32.9284C86.5428 31.295 83.0208 31.3368 80.1977 33.0376Z" fill="#8B3C91" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1564_4446" x="0.211548" y="0.786682" width="171.921" height="188.263" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="3.43842" />
                                <feGaussianBlur stdDeviation="17.1921" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1564_4446" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1564_4446" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", top: '59.71px', left: '375.76px' }} xmlns="http://www.w3.org/2000/svg" width="66" height="71" viewBox="0 0 66 71" fill="none">
                        <g opacity="0.5" filter="url(#filter0_d_1564_4447)">
                            <path d="M31.3613 17.6528L20.8821 23.9663C20.1868 24.3852 19.7617 25.1377 19.7617 25.9494V39.2526C19.7617 40.0719 20.1947 40.8302 20.9003 41.2465L31.3203 47.395C32.0607 47.8318 32.9821 47.8225 33.7135 47.3708L44.9016 40.4605C45.5845 40.0387 46.0002 39.2934 46.0002 38.4908V25.9859C46.0002 25.1545 45.5544 24.387 44.8324 23.975L33.7034 17.625C32.9753 17.2095 32.0794 17.2201 31.3613 17.6528Z" fill="#8B3C91" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1564_4447" x="0.225266" y="0.909692" width="65.3112" height="69.4684" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="3.12583" />
                                <feGaussianBlur stdDeviation="9.76823" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.837807 0 0 0 0 0.374165 0 0 0 0 0.880859 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1564_4447" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1564_4447" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", top: '301.18px', left: '45.21px' }} xmlns="http://www.w3.org/2000/svg" width="66" height="70" viewBox="0 0 66 70" fill="none">
                        <g opacity="0.38" filter="url(#filter0_d_1564_4448)">
                            <path d="M31.8047 17.1225L21.3255 23.4361C20.6302 23.855 20.2051 24.6074 20.2051 25.4191V38.7223C20.2051 39.5416 20.6381 40.2999 21.3437 40.7163L31.7637 46.8647C32.5041 47.3016 33.4255 47.2923 34.1568 46.8405L45.345 39.9302C46.0278 39.5085 46.4435 38.7631 46.4435 37.9605V25.4556C46.4435 24.6243 45.9978 23.8568 45.2757 23.4448L34.1468 17.0947C33.4186 16.6792 32.5228 16.6899 31.8047 17.1225Z" fill="#8B3C91" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1564_4448" x="0.668625" y="0.379418" width="65.3112" height="69.4684" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="3.12583" />
                                <feGaussianBlur stdDeviation="9.76823" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.837807 0 0 0 0 0.374165 0 0 0 0 0.880859 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1564_4448" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1564_4448" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", top: '138.77px', left: '146.7px' }} xmlns="http://www.w3.org/2000/svg" width="117" height="135" viewBox="0 0 117 135" fill="none">
                        <path d="M51.7414 2.09159L5.63288 29.8712C2.57363 31.7144 0.703125 35.0251 0.703125 38.5967V97.1308C0.703125 100.736 2.60838 104.072 5.71306 105.904L51.5612 132.957C54.8187 134.879 58.873 134.838 62.091 132.851L111.319 102.446C114.323 100.59 116.152 97.3102 116.152 93.7787V38.7572C116.152 35.0993 114.191 31.7223 111.014 29.9095L62.0467 1.9693C58.8428 0.141202 54.901 0.187978 51.7414 2.09159Z" fill="url(#paint0_linear_1564_4449)" />
                        <defs>
                            <linearGradient id="paint0_linear_1564_4449" x1="99.8536" y1="-0.99121" x2="-26.1218" y2="85.5957" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#491D75" />
                                <stop offset="1" stop-color="#844ABD" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", top: '30.48px', left: '107.4px' }} xmlns="http://www.w3.org/2000/svg" width="80" height="93" viewBox="0 0 80 93" fill="none">
                        <path opacity="0.38" d="M35.2021 1.82163L3.76452 20.7623C1.67867 22.019 0.40332 24.2763 0.40332 26.7115V66.6211C0.40332 69.079 1.70235 71.3538 3.81918 72.6029L35.0793 91.0482C37.3003 92.3588 40.0646 92.3308 42.2587 90.9757L75.823 70.2448C77.8716 68.9795 79.1187 66.7434 79.1187 64.3356V26.8209C79.1187 24.3269 77.7815 22.0244 75.6153 20.7884L42.2285 1.73826C40.044 0.491826 37.3564 0.523718 35.2021 1.82163Z" fill="url(#paint0_linear_1564_4450)" />
                        <defs>
                            <linearGradient id="paint0_linear_1564_4450" x1="68.006" y1="-0.280273" x2="-17.8864" y2="58.7563" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#491D75" />
                                <stop offset="1" stop-color="#844ABD" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", top: '311.8px', left: '130.85px' }} xmlns="http://www.w3.org/2000/svg" width="56" height="65" viewBox="0 0 56 65" fill="none">
                        <path opacity="0.38" d="M25.2068 1.51626L3.2005 14.7747C1.7404 15.6544 0.847656 17.2345 0.847656 18.9392V46.876C0.847656 48.5965 1.75698 50.1889 3.23876 51.0632L25.1208 63.975C26.6756 64.8924 28.6106 64.8728 30.1464 63.9242L53.6415 49.4126C55.0755 48.5268 55.9485 46.9616 55.9485 45.2761V19.0158C55.9485 17.27 55.0125 15.6582 53.4961 14.793L30.1253 1.4579C28.5962 0.585393 26.7148 0.607719 25.2068 1.51626Z" fill="url(#paint0_linear_1564_4451)" />
                        <defs>
                            <linearGradient id="paint0_linear_1564_4451" x1="48.1696" y1="0.0449223" x2="-11.9552" y2="41.3706" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#491D75" />
                                <stop offset="1" stop-color="#844ABD" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", top: '207.09px' }} xmlns="http://www.w3.org/2000/svg" width="79" height="92" viewBox="0 0 79 92" fill="none">
                        <path opacity="0.38" d="M34.7988 1.43101L3.3612 20.3717C1.27534 21.6284 0 23.8857 0 26.3208V66.2305C0 68.6884 1.29903 70.9632 3.41586 72.2122L34.6759 90.6576C36.897 91.9682 39.6613 91.9402 41.8553 90.5851L75.4197 69.8541C77.4683 68.5888 78.7154 66.3528 78.7154 63.9449V26.4303C78.7154 23.9363 77.3782 21.6338 75.212 20.3978L41.8252 1.34763C39.6407 0.101201 36.9531 0.133093 34.7988 1.43101Z" fill="url(#paint0_linear_1564_4452)" />
                        <defs>
                            <linearGradient id="paint0_linear_1564_4452" x1="67.6026" y1="-0.670898" x2="-18.2897" y2="58.3657" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#491D75" />
                                <stop offset="1" stop-color="#844ABD" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", top: '94.09px', left: '0px' }} xmlns="http://www.w3.org/2000/svg" width="116" height="125" viewBox="0 0 116 125" fill="none">
                        <g opacity="0.38" filter="url(#filter0_d_1564_4453)">
                            <path d="M54.4902 29.7372L33.5318 42.3643C32.1412 43.2021 31.291 44.707 31.291 46.3304V72.9369C31.291 74.5754 32.157 76.092 33.5683 76.9247L54.4083 89.2216C55.889 90.0953 57.7318 90.0767 59.1945 89.1732L81.5708 75.3526C82.9365 74.5091 83.7679 73.0184 83.7679 71.4132V46.4034C83.7679 44.7407 82.8764 43.2057 81.4323 42.3817L59.1744 29.6816C57.7181 28.8507 55.9264 28.8719 54.4902 29.7372Z" fill="#8B3C91" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1564_4453" x="0.032692" y="0.940751" width="114.993" height="123.308" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="3.12583" />
                                <feGaussianBlur stdDeviation="15.6292" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.837807 0 0 0 0 0.374165 0 0 0 0 0.880859 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1564_4453" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1564_4453" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", top: '152.78px', left: '296.03px' }} xmlns="http://www.w3.org/2000/svg" width="2" height="82" viewBox="0 0 2 82" fill="none">
                        <path d="M1.02539 0.0185547V81.7629" stroke="url(#paint0_linear_1564_4454)" stroke-width="1.85213" />
                        <defs>
                            <linearGradient id="paint0_linear_1564_4454" x1="2.19206" y1="76.4151" x2="0.681676" y2="76.4095" gradientUnits="userSpaceOnUse">
                                <stop offset="0.286557" stop-color="#73709F" />
                                <stop offset="1" stop-color="#923DA4" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", top: '37.51px', left: '231.63px' }} xmlns="http://www.w3.org/2000/svg" width="3" height="68" viewBox="0 0 3 68" fill="none">
                        <path d="M1.63379 0.75293V67.9583" stroke="url(#paint0_linear_1564_4455)" stroke-width="1.85213" />
                        <defs>
                            <linearGradient id="paint0_linear_1564_4455" x1="4.00394" y1="64.5677" x2="-43.3401" y2="115.518" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#9C379B" />
                                <stop offset="1" stop-color="#AD6F6D" />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", top: '37.51px', left: '296.03px' }} xmlns="http://www.w3.org/2000/svg" width="3" height="68" viewBox="0 0 3 68" fill="none">
                        <path d="M1.63379 0.75293V67.9583" stroke="url(#paint0_linear_1564_4455)" stroke-width="1.85213" />
                        <defs>
                            <linearGradient id="paint0_linear_1564_4455" x1="4.00394" y1="64.5677" x2="-43.3401" y2="115.518" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#9C379B" />
                                <stop offset="1" stop-color="#AD6F6D" />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", top: '240px', left: '295.97px' }} xmlns="http://www.w3.org/2000/svg" width="68" height="41" viewBox="0 0 68 41" fill="none">
                        <path d="M0.974609 1.24707L66.8259 39.9769" stroke="url(#paint0_linear_1564_4456)" stroke-width="1.85213" />
                        <defs>
                            <linearGradient id="paint0_linear_1564_4456" x1="158.62" y1="40.882" x2="156.667" y2="92.7389" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#9C379B" />
                                <stop offset="1" stop-color="#AD6F6D" />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", top: '112.53px', left: '233.22px' }} xmlns="http://www.w3.org/2000/svg" width="63" height="43" viewBox="0 0 63 43" fill="none">
                        <path d="M1.21875 0.773438L62.1725 41.4093" stroke="url(#paint0_linear_1564_4457)" stroke-width="1.85213" />
                        <defs>
                            <linearGradient id="paint0_linear_1564_4457" x1="72.3314" y1="38.7508" x2="-3.8514" y2="3.96693" gradientUnits="userSpaceOnUse">
                                <stop offset="0.286557" stop-color="#73709F" />
                                <stop offset="1" stop-color="#923DA4" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", top: '150.04px', left: '291.05px' }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M6.44146 11.3091C8.99871 11.3091 11.0718 9.23602 11.0718 6.67877C11.0718 4.12151 8.99871 2.04845 6.44146 2.04845C3.88421 2.04845 1.81115 4.12151 1.81115 6.67877C1.81115 9.23602 3.88421 11.3091 6.44146 11.3091Z" fill="#FEFEFD" stroke="#3A3E47" stroke-width="2.4695" />
                    </svg>
                    <svg style={{ position: "absolute", top: '237.3px', left: '292.94px' }} xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path d="M6.33404 10.5669C8.89129 10.5669 10.9644 8.49383 10.9644 5.93658C10.9644 3.37933 8.89129 1.30627 6.33404 1.30627C3.77679 1.30627 1.70373 3.37933 1.70373 5.93658C1.70373 8.49383 3.77679 10.5669 6.33404 10.5669Z" fill="#FBF9E6" stroke="#6C4639" stroke-width="2.4695" />
                    </svg>
                    <svg style={{ position: "absolute", top: '104.72PX', left: '228.24px' }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M6.63385 10.9849C9.1911 10.9849 11.2642 8.9118 11.2642 6.35455C11.2642 3.79729 9.1911 1.72423 6.63385 1.72423C4.07659 1.72423 2.00353 3.79729 2.00353 6.35455C2.00353 8.9118 4.07659 10.9849 6.63385 10.9849Z" fill="#EA84F3" stroke="#531958" stroke-width="2.4695" />
                    </svg>
                </div>
            </div>
            <div>
                <a onClick={handleOpenModal} className={clsx(
                    styles["custom-btn"],
                )} style={{ cursor: "pointer" }}>
                    <img src="icons/add.svg" />
                    Created New Adventure
                </a>
            </div>
            <CampaignModal />
        </div>
    )
}