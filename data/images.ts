import PhotoBanquet from "@/assets/community_photos/banquet.jpg";
import PhotoGuangbo from "@/assets/community_photos/clark_kerr_sun_guangbo.jpg";
import PhotoClub from "@/assets/community_photos/club_photo.jpg";
import PhotoLunch from "@/assets/community_photos/lunch_after_practice.jpg";
import PhotoSifu from "@/assets/community_photos/sf_kungfu_festival_sifu.jpg";
import PhotoRuler from "@/assets/community_photos/tenderloin_ruler.jpg";
import { GalleryItem } from "@/lib/types";

export const COMMUNITY_PHOTOS: GalleryItem[] = [
  {
    image: PhotoGuangbo,
    caption: "Performing at the Clark Kerr campus"
  },
  {
    image: PhotoLunch,
    caption: "Enjoying lunch after practice"
  },
  {
    image: PhotoSifu,
    caption: "Sifu Bryant Fong at the SF Kungfu Festival"
  },
  {
    image: PhotoRuler,
    caption: "Performing at the SF Tenderloin Community Center"
  },
  {
    image: PhotoBanquet,
    caption: "UCMAP banquet"
  },
  {
    image: PhotoClub,
    caption: "End of year group photo"
  }
];
