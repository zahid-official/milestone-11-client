import banner1 from "/assets/banner1.png";
import banner2 from "/assets/banner2.png";
import banner3 from "/assets/banner3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import { Pagination, Autoplay, EffectFade } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={40}
        // effect={"fade"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper min-h-[86vh] dark:bg-[#0e1629] bg-[#f1f5eb]"
      >
        {/* slider-01 */}
        <SwiperSlide>
          <div className="pb-16 hero sm:py-12 py-3 mt-10">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
              {/* part-01 */}
              <div className="flex-1 flex justify-center items-center rounded-3xl ">
                <div className="overflow-hidden">
                  <img src={banner1} className="sm:max-w-sm" />
                </div>
              </div>

              {/* part-02 */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <h5 className="font-bold sm:text-lg">Book Club</h5>
                  <svg
                    width="52"
                    height="10"
                    viewBox="0 0 52 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3920_930)">
                      <path
                        d="M47.2105 2.14437C46.4106 2.36766 45.5884 2.50135 44.759 2.54299L38.0755 3.26714C36.5634 3.43986 35.0723 3.76256 33.6242 4.23048C32.835 4.49614 32.0757 4.84349 31.3587 5.2669C30.5825 5.78994 29.7749 6.26475 28.9404 6.68864C28.4375 6.92402 27.8878 7.04215 27.3326 7.03411C26.7214 6.99856 26.1435 6.7438 25.7049 6.3166C24.8612 5.44628 24.6287 4.38993 24.0772 3.71228C23.8491 3.37951 23.506 3.14288 23.1139 3.04791C22.6936 2.95474 22.2553 2.98472 21.8516 3.13427C20.9452 3.46398 20.1849 4.10423 19.7057 4.94135C19.1277 5.79839 18.6759 6.775 18.0182 7.69183C17.3781 8.67698 16.4295 9.42226 15.3209 9.81116C14.739 9.97733 14.1223 9.97733 13.5404 9.81116C12.9891 9.64765 12.4808 9.36403 12.0522 8.9807C11.2858 8.27735 10.6885 7.40973 10.3049 6.44282C9.91959 5.55257 9.64054 4.68889 9.25521 3.93151C8.81334 2.89622 8.01098 2.05634 6.99695 1.56765C5.98293 1.07897 4.82607 0.974642 3.74097 1.27404C3.16462 1.41933 2.62589 1.6859 2.16075 2.05594C1.69561 2.42599 1.31477 2.89102 1.04364 3.41996C0.610002 4.23627 0.403487 5.15404 0.445698 6.07742C0.462342 6.66905 0.588506 7.25247 0.817762 7.79813C0.970566 8.18346 1.07686 8.37613 1.04364 8.40271C1.01043 8.42928 0.850974 8.26318 0.62509 7.89778C0.298973 7.3528 0.0970721 6.74258 0.0337932 6.11063C-0.0934455 5.09968 0.0725961 4.07346 0.512138 3.1542C0.79995 2.52884 1.21882 1.97266 1.74037 1.52332C2.26192 1.07399 2.87396 0.742013 3.53502 0.549886C4.34237 0.314234 5.19223 0.262331 6.02226 0.397987C6.85229 0.533642 7.64143 0.85342 8.33175 1.33384C9.08289 1.89515 9.68508 2.63192 10.0857 3.47975C10.5175 4.31021 10.8231 5.18716 11.2018 6.01762C11.536 6.84506 12.054 7.58567 12.7166 8.18347C13.0189 8.47409 13.3917 8.68086 13.7983 8.78339C14.2049 8.88592 14.6313 8.88064 15.0352 8.7681C15.9067 8.44143 16.6499 7.84273 17.1545 7.06068C17.7325 6.2568 18.1843 5.28018 18.8155 4.33678C19.1365 3.84764 19.5182 3.40117 19.9515 3.00804C20.4081 2.61118 20.9387 2.30862 21.5128 2.11779C22.1052 1.91517 22.7422 1.88068 23.3531 2.01814C23.9729 2.17131 24.5187 2.53834 24.8944 3.05455C25.5986 3.99795 25.8378 5.04765 26.4092 5.5725C26.6685 5.83263 27.0128 5.99065 27.3791 6.01762C27.7827 6.02071 28.1821 5.9345 28.5484 5.76517C29.3507 5.36762 30.1293 4.92396 30.8804 4.43644C31.658 3.99071 32.4823 3.632 33.3385 3.36681C34.8537 2.91365 36.4126 2.62192 37.9891 2.49649C40.8459 2.25731 43.1379 2.18423 44.7324 2.1045C45.5574 2.02614 46.3885 2.03952 47.2105 2.14437Z"
                        fill="#034833"
                      ></path>
                      <path
                        d="M45.4762 6.2697C45.4231 6.13018 46.1406 5.7382 47.2235 5.08712C47.7683 4.76158 48.4127 4.36296 49.1036 3.89126C49.4491 3.65873 49.768 3.39963 50.1666 3.13388C50.3373 3.0178 50.4954 2.88421 50.6383 2.73527C50.7579 2.61795 50.8527 2.47789 50.9173 2.32336C50.9506 2.19713 50.9173 2.20377 50.9173 2.15726C50.821 2.06916 50.7009 2.01139 50.5719 1.99117L49.283 1.64571C48.4592 1.41982 47.7218 1.20058 47.1039 0.981341C45.8682 0.582721 45.1108 0.263819 45.1573 0.124302C45.2038 -0.0152149 46.001 0.0379361 47.2833 0.250534C47.9476 0.356832 48.6784 0.502993 49.5155 0.675728L50.8443 0.968051C51.184 1.02987 51.4955 1.19726 51.7345 1.4464C51.8826 1.61431 51.9774 1.82242 52.0069 2.04432C52.0341 2.24825 52.0113 2.45574 51.9405 2.6489C51.8291 2.94985 51.6521 3.2222 51.4223 3.44614C51.235 3.63879 51.0254 3.80831 50.7978 3.95105C50.4124 4.23009 50.0205 4.47591 49.6484 4.70179C48.9845 5.09883 48.2916 5.44528 47.5756 5.7382C46.3399 6.25641 45.5294 6.40257 45.4762 6.2697Z"
                        fill="#034833"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3920_930">
                        <rect
                          width="52"
                          height="9.86585"
                          fill="white"
                          transform="translate(0 0.0664062)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h1 className="sm:text-7xl text-4xl font-bold sm:leading-[72px] tracking-tight">
                  Books Made Easy, Knowledge Made Possible.
                </h1>
                <button className="btn btn-neutral hover:bg-[#131b25] text-white mt-7 text-lg font-semibold">
                  <span className="z-10">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slider-02 */}
        <SwiperSlide>
          <div className="pb-16 hero sm:py-12 py-3 mt-10">
            <div className="hero-content gap-10 flex-col lg:flex-row">
              {/* part-01 */}
              <div className="flex-1 flex justify-center items-center rounded-3xl ">
                <div className="overflow-hidden">
                  <img src={banner2} className="sm:max-w-sm" />
                </div>
              </div>

              {/* part-02 */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <h5 className="font-bold sm:text-lg">Book Club</h5>
                  <svg
                    width="52"
                    height="10"
                    viewBox="0 0 52 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3920_930)">
                      <path
                        d="M47.2105 2.14437C46.4106 2.36766 45.5884 2.50135 44.759 2.54299L38.0755 3.26714C36.5634 3.43986 35.0723 3.76256 33.6242 4.23048C32.835 4.49614 32.0757 4.84349 31.3587 5.2669C30.5825 5.78994 29.7749 6.26475 28.9404 6.68864C28.4375 6.92402 27.8878 7.04215 27.3326 7.03411C26.7214 6.99856 26.1435 6.7438 25.7049 6.3166C24.8612 5.44628 24.6287 4.38993 24.0772 3.71228C23.8491 3.37951 23.506 3.14288 23.1139 3.04791C22.6936 2.95474 22.2553 2.98472 21.8516 3.13427C20.9452 3.46398 20.1849 4.10423 19.7057 4.94135C19.1277 5.79839 18.6759 6.775 18.0182 7.69183C17.3781 8.67698 16.4295 9.42226 15.3209 9.81116C14.739 9.97733 14.1223 9.97733 13.5404 9.81116C12.9891 9.64765 12.4808 9.36403 12.0522 8.9807C11.2858 8.27735 10.6885 7.40973 10.3049 6.44282C9.91959 5.55257 9.64054 4.68889 9.25521 3.93151C8.81334 2.89622 8.01098 2.05634 6.99695 1.56765C5.98293 1.07897 4.82607 0.974642 3.74097 1.27404C3.16462 1.41933 2.62589 1.6859 2.16075 2.05594C1.69561 2.42599 1.31477 2.89102 1.04364 3.41996C0.610002 4.23627 0.403487 5.15404 0.445698 6.07742C0.462342 6.66905 0.588506 7.25247 0.817762 7.79813C0.970566 8.18346 1.07686 8.37613 1.04364 8.40271C1.01043 8.42928 0.850974 8.26318 0.62509 7.89778C0.298973 7.3528 0.0970721 6.74258 0.0337932 6.11063C-0.0934455 5.09968 0.0725961 4.07346 0.512138 3.1542C0.79995 2.52884 1.21882 1.97266 1.74037 1.52332C2.26192 1.07399 2.87396 0.742013 3.53502 0.549886C4.34237 0.314234 5.19223 0.262331 6.02226 0.397987C6.85229 0.533642 7.64143 0.85342 8.33175 1.33384C9.08289 1.89515 9.68508 2.63192 10.0857 3.47975C10.5175 4.31021 10.8231 5.18716 11.2018 6.01762C11.536 6.84506 12.054 7.58567 12.7166 8.18347C13.0189 8.47409 13.3917 8.68086 13.7983 8.78339C14.2049 8.88592 14.6313 8.88064 15.0352 8.7681C15.9067 8.44143 16.6499 7.84273 17.1545 7.06068C17.7325 6.2568 18.1843 5.28018 18.8155 4.33678C19.1365 3.84764 19.5182 3.40117 19.9515 3.00804C20.4081 2.61118 20.9387 2.30862 21.5128 2.11779C22.1052 1.91517 22.7422 1.88068 23.3531 2.01814C23.9729 2.17131 24.5187 2.53834 24.8944 3.05455C25.5986 3.99795 25.8378 5.04765 26.4092 5.5725C26.6685 5.83263 27.0128 5.99065 27.3791 6.01762C27.7827 6.02071 28.1821 5.9345 28.5484 5.76517C29.3507 5.36762 30.1293 4.92396 30.8804 4.43644C31.658 3.99071 32.4823 3.632 33.3385 3.36681C34.8537 2.91365 36.4126 2.62192 37.9891 2.49649C40.8459 2.25731 43.1379 2.18423 44.7324 2.1045C45.5574 2.02614 46.3885 2.03952 47.2105 2.14437Z"
                        fill="#034833"
                      ></path>
                      <path
                        d="M45.4762 6.2697C45.4231 6.13018 46.1406 5.7382 47.2235 5.08712C47.7683 4.76158 48.4127 4.36296 49.1036 3.89126C49.4491 3.65873 49.768 3.39963 50.1666 3.13388C50.3373 3.0178 50.4954 2.88421 50.6383 2.73527C50.7579 2.61795 50.8527 2.47789 50.9173 2.32336C50.9506 2.19713 50.9173 2.20377 50.9173 2.15726C50.821 2.06916 50.7009 2.01139 50.5719 1.99117L49.283 1.64571C48.4592 1.41982 47.7218 1.20058 47.1039 0.981341C45.8682 0.582721 45.1108 0.263819 45.1573 0.124302C45.2038 -0.0152149 46.001 0.0379361 47.2833 0.250534C47.9476 0.356832 48.6784 0.502993 49.5155 0.675728L50.8443 0.968051C51.184 1.02987 51.4955 1.19726 51.7345 1.4464C51.8826 1.61431 51.9774 1.82242 52.0069 2.04432C52.0341 2.24825 52.0113 2.45574 51.9405 2.6489C51.8291 2.94985 51.6521 3.2222 51.4223 3.44614C51.235 3.63879 51.0254 3.80831 50.7978 3.95105C50.4124 4.23009 50.0205 4.47591 49.6484 4.70179C48.9845 5.09883 48.2916 5.44528 47.5756 5.7382C46.3399 6.25641 45.5294 6.40257 45.4762 6.2697Z"
                        fill="#034833"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3920_930">
                        <rect
                          width="52"
                          height="9.86585"
                          fill="white"
                          transform="translate(0 0.0664062)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h1 className="sm:text-7xl text-4xl font-bold sm:leading-[72px] tracking-tight">
                Library Designed Fast Learning Unfolded.
                </h1>
                <button className="btn btn-neutral hover:bg-[#131b25] text-white mt-7 text-lg font-semibold">
                  <span className="z-10">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slider-03 */}
        <SwiperSlide>
          <div className="pb-16 hero sm:py-12 py-3 mt-10">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
              {/* part-01 */}
              <div className="flex-1 flex justify-center items-center rounded-3xl ">
                <div className="overflow-hidden scale-95">
                  <img src={banner3} className="sm:max-w-sm " />
                </div>
              </div>

              {/* part-02 */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <h5 className="font-bold sm:text-lg">Book Club</h5>
                  <svg
                    width="52"
                    height="10"
                    viewBox="0 0 52 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3920_930)">
                      <path
                        d="M47.2105 2.14437C46.4106 2.36766 45.5884 2.50135 44.759 2.54299L38.0755 3.26714C36.5634 3.43986 35.0723 3.76256 33.6242 4.23048C32.835 4.49614 32.0757 4.84349 31.3587 5.2669C30.5825 5.78994 29.7749 6.26475 28.9404 6.68864C28.4375 6.92402 27.8878 7.04215 27.3326 7.03411C26.7214 6.99856 26.1435 6.7438 25.7049 6.3166C24.8612 5.44628 24.6287 4.38993 24.0772 3.71228C23.8491 3.37951 23.506 3.14288 23.1139 3.04791C22.6936 2.95474 22.2553 2.98472 21.8516 3.13427C20.9452 3.46398 20.1849 4.10423 19.7057 4.94135C19.1277 5.79839 18.6759 6.775 18.0182 7.69183C17.3781 8.67698 16.4295 9.42226 15.3209 9.81116C14.739 9.97733 14.1223 9.97733 13.5404 9.81116C12.9891 9.64765 12.4808 9.36403 12.0522 8.9807C11.2858 8.27735 10.6885 7.40973 10.3049 6.44282C9.91959 5.55257 9.64054 4.68889 9.25521 3.93151C8.81334 2.89622 8.01098 2.05634 6.99695 1.56765C5.98293 1.07897 4.82607 0.974642 3.74097 1.27404C3.16462 1.41933 2.62589 1.6859 2.16075 2.05594C1.69561 2.42599 1.31477 2.89102 1.04364 3.41996C0.610002 4.23627 0.403487 5.15404 0.445698 6.07742C0.462342 6.66905 0.588506 7.25247 0.817762 7.79813C0.970566 8.18346 1.07686 8.37613 1.04364 8.40271C1.01043 8.42928 0.850974 8.26318 0.62509 7.89778C0.298973 7.3528 0.0970721 6.74258 0.0337932 6.11063C-0.0934455 5.09968 0.0725961 4.07346 0.512138 3.1542C0.79995 2.52884 1.21882 1.97266 1.74037 1.52332C2.26192 1.07399 2.87396 0.742013 3.53502 0.549886C4.34237 0.314234 5.19223 0.262331 6.02226 0.397987C6.85229 0.533642 7.64143 0.85342 8.33175 1.33384C9.08289 1.89515 9.68508 2.63192 10.0857 3.47975C10.5175 4.31021 10.8231 5.18716 11.2018 6.01762C11.536 6.84506 12.054 7.58567 12.7166 8.18347C13.0189 8.47409 13.3917 8.68086 13.7983 8.78339C14.2049 8.88592 14.6313 8.88064 15.0352 8.7681C15.9067 8.44143 16.6499 7.84273 17.1545 7.06068C17.7325 6.2568 18.1843 5.28018 18.8155 4.33678C19.1365 3.84764 19.5182 3.40117 19.9515 3.00804C20.4081 2.61118 20.9387 2.30862 21.5128 2.11779C22.1052 1.91517 22.7422 1.88068 23.3531 2.01814C23.9729 2.17131 24.5187 2.53834 24.8944 3.05455C25.5986 3.99795 25.8378 5.04765 26.4092 5.5725C26.6685 5.83263 27.0128 5.99065 27.3791 6.01762C27.7827 6.02071 28.1821 5.9345 28.5484 5.76517C29.3507 5.36762 30.1293 4.92396 30.8804 4.43644C31.658 3.99071 32.4823 3.632 33.3385 3.36681C34.8537 2.91365 36.4126 2.62192 37.9891 2.49649C40.8459 2.25731 43.1379 2.18423 44.7324 2.1045C45.5574 2.02614 46.3885 2.03952 47.2105 2.14437Z"
                        fill="#034833"
                      ></path>
                      <path
                        d="M45.4762 6.2697C45.4231 6.13018 46.1406 5.7382 47.2235 5.08712C47.7683 4.76158 48.4127 4.36296 49.1036 3.89126C49.4491 3.65873 49.768 3.39963 50.1666 3.13388C50.3373 3.0178 50.4954 2.88421 50.6383 2.73527C50.7579 2.61795 50.8527 2.47789 50.9173 2.32336C50.9506 2.19713 50.9173 2.20377 50.9173 2.15726C50.821 2.06916 50.7009 2.01139 50.5719 1.99117L49.283 1.64571C48.4592 1.41982 47.7218 1.20058 47.1039 0.981341C45.8682 0.582721 45.1108 0.263819 45.1573 0.124302C45.2038 -0.0152149 46.001 0.0379361 47.2833 0.250534C47.9476 0.356832 48.6784 0.502993 49.5155 0.675728L50.8443 0.968051C51.184 1.02987 51.4955 1.19726 51.7345 1.4464C51.8826 1.61431 51.9774 1.82242 52.0069 2.04432C52.0341 2.24825 52.0113 2.45574 51.9405 2.6489C51.8291 2.94985 51.6521 3.2222 51.4223 3.44614C51.235 3.63879 51.0254 3.80831 50.7978 3.95105C50.4124 4.23009 50.0205 4.47591 49.6484 4.70179C48.9845 5.09883 48.2916 5.44528 47.5756 5.7382C46.3399 6.25641 45.5294 6.40257 45.4762 6.2697Z"
                        fill="#034833"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3920_930">
                        <rect
                          width="52"
                          height="9.86585"
                          fill="white"
                          transform="translate(0 0.0664062)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h1 className="sm:text-7xl text-4xl font-bold sm:leading-[72px] tracking-tight">
                Books Shelved Neat Library Made Elegant & Calm.
                </h1>
                <button className="btn btn-neutral hover:bg-[#131b25] text-white mt-7 text-lg font-semibold">
                  <span className="z-10">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
