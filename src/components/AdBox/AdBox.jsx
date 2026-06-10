import { useEffect } from 'react';

export default function AdBox()
{
    useEffect(() => {

        const timer = setTimeout(() => {

            try
            {
                if(window.adsbygoogle)
                {
                    window.adsbygoogle.push({});
                }
            }
            catch(error)
            {
                console.log("AdSense Error:", error);
            }

        }, 100);

        return () => clearTimeout(timer);

    }, []);

    return (

        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6673485080510577"
            data-ad-slot="9036687653"
            data-ad-format="auto"
            data-full-width-responsive="true"
        />

    );
}