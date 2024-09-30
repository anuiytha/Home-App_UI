import { createClient } from "contentful";

const useContentful = () => {

    const client = createClient({
        space: "sof4v5jsgktw",
        accessToken: "NwHqVstZcCbNMqgKyBganxVk1u7gt1h4bgh9Hyc6tzc",
        host: "preview.contentful.com"
    });

    const getBanner = async () => {

        try {
            const entries = await client.getEntries({
                content_type: "homeBanner",
                select: "fields"

            })

            const sanitizedEntries = entries.items.map((item) => {
                const Banner = item.fields.banner.fields;
                return {
                    ...item.fields,
                    Banner
                };
            });


            return sanitizedEntries;
        } catch (error) {
            console.log('Error fetching banner: ${error}');

        }

    };
    return { getBanner };

};
export default useContentful;