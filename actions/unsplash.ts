import { createApi } from "unsplash-js";

// ensure unsplash environment variables are defined
if (!process.env.UNSPLASH_ACCESS_KEY)
  throw new Error("Unsplash access key must be defined");

export const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY
});

// get random image from unsplash
export async function getRandomImage() {
  const response = await unsplashApi.photos.getRandom({
    orientation: "landscape",
    query: "nature"
  });

  // error handling: response errored
  if (response.type === "error") {
    console.error(
      "Error fetching random image from Unsplash:",
      response.errors
    );
    return null;
  }

  // error handling: response is an array
  if (response.response instanceof Array) {
    console.error(
      "Expected a single image, but got an array:",
      response.response
    );
    return null;
  }

  return response.response.urls.regular;
}
