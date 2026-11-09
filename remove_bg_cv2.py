import os
import cv2
import numpy as np

assets_dir = r"C:\Users\kohli\Desktop\fusion-website\public\assets"

def remove_bg_cv2(img_path):
    try:
        img = cv2.imread(img_path, cv2.IMREAD_COLOR)
        if img is None: return

        h, w = img.shape[:2]
        mask = np.zeros((h + 2, w + 2), np.uint8)
        diff = (65, 65, 65)
        
        ff_img = img.copy()
        cv2.floodFill(ff_img, mask, (0, 0), (0, 255, 0), diff, diff, cv2.FLOODFILL_FIXED_RANGE)
        cv2.floodFill(ff_img, mask, (w - 1, 0), (0, 255, 0), diff, diff, cv2.FLOODFILL_FIXED_RANGE)
        cv2.floodFill(ff_img, mask, (0, h - 1), (0, 255, 0), diff, diff, cv2.FLOODFILL_FIXED_RANGE)
        cv2.floodFill(ff_img, mask, (w - 1, h - 1), (0, 255, 0), diff, diff, cv2.FLOODFILL_FIXED_RANGE)

        alpha = mask[1:h+1, 1:w+1]
        final_alpha = np.where(alpha == 1, 0, 255).astype(np.uint8)
        final_alpha = cv2.GaussianBlur(final_alpha, (3, 3), 0)
        final_img = np.dstack((img, final_alpha))
        cv2.imwrite(img_path, final_img)
        print(f"Cleaned: {os.path.basename(img_path)}")
    except Exception as e:
        print(f"Failed {os.path.basename(img_path)}: {e}")

for file in os.listdir(assets_dir):
    if file.endswith(".png") and ("3d_" in file or "side_" in file):
        remove_bg_cv2(os.path.join(assets_dir, file))
