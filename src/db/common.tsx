const common = {
    telescope: {
        main: {
            optical: "OfficinaStellare, RiFast600(Claiber=600mm, f/3.8, F=2280mm, RC based)",
            spectrometer: "LISA High Luminosity Spectrograph(Shelyak Instruments)",
            camera: {
                spectrometerCamera: "ZWO ASI2600mm Pro (Temp. -15℃)",
                mirrorCamera: "ZWO ASI174mm Mini",  
            },
        },
        guide: {
            optical: "sky rover 102 super ed doublet apo (Claiber=102mm, f/7, F=714mm)",
            camera: "ZWO ASI1600mm Cool",
        },
    },
    location: "세종특별자치시 달빛1로 265 세종과학예술영재학교 천문대(SAO)",
}

export default common;