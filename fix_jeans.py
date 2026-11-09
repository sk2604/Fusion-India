import cv2
import numpy as np

img_path = r"C:\Users\kohli\Desktop\fusion-website\public\assets\side_denim_jeans_1791199219256.png"

# Read with alpha channel
img = cv2.imread(img_path, cv2.IMREAD_UNCHANGED)

if img is not None:
    h, w = img.shape[:2]
    
    # The weird floating hanger is in the top left quadrant.
    # Let's erase pixels (make alpha=0) in the region x < w/2 - 20, y < h/2
    
    # Region to erase:
    erase_x_end = int(w / 2) - 40 # Up to slightly left of center
    erase_y_end = int(h / 2) + 100 # Top half
    
    # Erase alpha
    img[0:erase_y_end, 0:erase_x_end, 3] = 0
    
    # Write back
    cv2.imwrite(img_path, img)
    print("Fixed jeans image by erasing top-left artifact")
else:
    print("Failed to load image")
