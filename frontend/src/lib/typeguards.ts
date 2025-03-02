import { imageQualities } from "../components/Image";

export function checkImageQualities(data: unknown): data is imageQualities {
  for (const el of data as imageQualities) {
    if (
      !Object.prototype.hasOwnProperty.call(el, "width") ||
      !Object.prototype.hasOwnProperty.call(el, "source")
    )
      return false;
  }

  return true;
}
