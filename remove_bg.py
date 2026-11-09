import os
from PIL import Image

assets_dir = r"C:\Users\kohli\Desktop\fusion-website\public\assets"

def make_white_transparent(img_path):
    try:
        img = Image.open(img_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # If pixel is very close to white, make it transparent
            if item[0] > 235 and item[1] > 235 and item[2] > 235:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(img_path, "PNG")
        print(f"Processed: {os.path.basename(img_path)}")
    except Exception as e:
        print(f"Failed {os.path.basename(img_path)}: {e}")

for file in os.listdir(assets_dir):
    if file.endswith(".png") and ("3d_" in file or "side_" in file):
        make_white_transparent(os.path.join(assets_dir, file))
