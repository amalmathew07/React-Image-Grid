import { format } from "date-fns";
import { Block } from "./blocks";

export const getImageDetailsArray = (block: Block): Block[] => {
    let imageBlocks: Block[] = []
    if (block && block.type === 'Image') {
        imageBlocks.push(block);
    }
    if (block.children && block.children.length > 0) {
        for (const child of block.children) {
            imageBlocks = imageBlocks.concat(getImageDetailsArray(child));
        }
    }
    return imageBlocks;
}

export const formatDate = (inputDate?: string | number): string | undefined => {
    if (!inputDate) {
        return undefined;
      }
    const parsedDate = new Date(inputDate);
    return format(parsedDate, 'MMMM dd, yyyy');
  };