# from bs4 import BeautifulSoup
import os

data = [
        # {
        #         "name": 'facebook',
        #         "link": '',
        #         "img": 'https://img.mysignature.io/addons/v2/facebook_v1_shape1_b.png',
        #         "brand": [
        #                 'https://img.mysignature.io/addons/v2/facebook_v1_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/facebook_v2_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/facebook_v3_shape1_b.png',
        #         ],
        #         "invert": [
        #                 'https://img.mysignature.io/addons/v2/facebook_v1_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/facebook_v2_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/facebook_v3_shape1_i.png',
        #         ]
        # },
        # {
        #         "name": 'instagram',
        #         "link": '',
        #         "img": 'https://img.mysignature.io/addons/v2/instagram_v1_shape1_b.png',
        #         "brand": [
        #                 'https://img.mysignature.io/addons/v2/instagram_v1_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/instagram_v2_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/instagram_v3_shape1_b.png',
        #         ],
        #         "invert": [
        #                 'https://img.mysignature.io/addons/v2/instagram_v1_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/instagram_v2_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/instagram_v3_shape1_i.png',
        #         ]
        # },
        # {
        #         "name": 'twitter',
        #         "link": '',
        #         "img": 'https://img.mysignature.io/addons/v2/twitter_v1_shape1_b.png',
        #         "brand": [
        #                 'https://img.mysignature.io/addons/v2/twitter_v1_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/twitter_v2_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/twitter_v3_shape1_b.png',
        #         ],
        #         "invert": [
        #                 'https://img.mysignature.io/addons/v2/twitter_v1_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/twitter_v2_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/twitter_v3_shape1_i.png',
        #         ]
        # },
        # {
        #         "name": 'linkedin',
        #         "link": '',
        #         "img": 'https://img.mysignature.io/addons/v2/linkedin_v1_shape1_b.png',
        #         "brand": [
        #                 'https://img.mysignature.io/addons/v2/linkedin_v1_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/linkedin_v2_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/linkedin_v3_shape1_b.png',
        #         ],
        #         "invert": [
        #                 'https://img.mysignature.io/addons/v2/linkedin_v1_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/linkedin_v2_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/linkedin_v3_shape1_i.png',
        #         ]
        # },
        # {
        #         "name": 'youtube',
        #         "link": '',
        #         "img": 'https://img.mysignature.io/addons/v2/youtube_v1_shape1_b.png',
        #         "brand": [
        #                 'https://img.mysignature.io/addons/v2/youtube_v1_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/youtube_v2_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/youtube_v3_shape1_b.png',
        #         ],
        #         "invert": [
        #                 'https://img.mysignature.io/addons/v2/youtube_v1_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/youtube_v2_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/youtube_v3_shape1_i.png',
        #         ]
        # },
        # {
        #         "name": 'pinterest',
        #         "link": '',
        #         "img": 'https://img.mysignature.io/addons/v2/pinterest_v1_shape1_b.png',
        #         "brand": [
        #                 'https://img.mysignature.io/addons/v2/pinterest_v1_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/pinterest_v2_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/pinterest_v3_shape1_b.png',
        #         ],
        #         "invert": [
        #                 'https://img.mysignature.io/addons/v2/pinterest_v1_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/pinterest_v2_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/pinterest_v3_shape1_i.png',
        #         ]
        # },
        # {
        #         "name": 'dribbble',
        #         "link": '',
        #         "img": 'https://img.mysignature.io/addons/v2/dribbble_v1_shape1_b.png',
        #         "brand": [
        #                 'https://img.mysignature.io/addons/v2/dribbble_v1_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/dribbble_v2_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/dribbble_v3_shape1_b.png',
        #         ],
        #         "invert": [
        #                 'https://img.mysignature.io/addons/v2/dribbble_v1_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/dribbble_v2_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/dribbble_v3_shape1_i.png',
        #         ]
        # },
        # {
        #         "name": 'behance',
        #         "link": '',
        #         "img": 'https://img.mysignature.io/addons/v2/behance_v1_shape1_b.png',
        #         "brand": [
        #                 'https://img.mysignature.io/addons/v2/behance_v1_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/behance_v2_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/behance_v3_shape1_b.png',
        #         ],
        #         "invert": [
        #                 'https://img.mysignature.io/addons/v2/behance_v1_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/behance_v2_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/behance_v3_shape1_i.png',
        #         ]
        # },
        # {
        #         "name": 'patreon',
        #         "link": '',
        #         "img": 'https://img.mysignature.io/addons/v2/patreon_v1_shape1_b.png',
        #         "brand": [
        #                 'https://img.mysignature.io/addons/v2/patreon_v1_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/patreon_v2_shape1_b.png',
        #                 'https://img.mysignature.io/addons/v2/patreon_v3_shape1_b.png',
        #         ],
        #         "invert": [
        #                 'https://img.mysignature.io/addons/v2/patreon_v1_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/patreon_v2_shape1_i.png',
        #                 'https://img.mysignature.io/addons/v2/patreon_v3_shape1_i.png',
        #         ]
        # },
        {
                "name": 'vimeo',
                "link": '',
                "img": 'https://img.mysignature.io/addons/v2/vimeo_v1_shape1_b.png',
                "brand": [
                        'https://img.mysignature.io/addons/v2/vimeo_v1_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/vimeo_v2_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/vimeo_v3_shape1_b.png',
                ],
                "invert": [
                        'https://img.mysignature.io/addons/v2/vimeo_v1_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/vimeo_v2_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/vimeo_v3_shape1_i.png',
                ]
        }

]
import requests

def get_img_name(img_url):
    # 例如：img_url = 'https://img.mysignature.io/addons/v2/facebook_v1_shape1_b.png'
    # 返回：'facebook_v1_shape1_b.png'
    return os.path.basename(img_url)

def download_brand_img(img_url, output_directory):
    response = requests.get(img_url)
    if response.status_code == 200:
        with open(os.path.join(output_directory, get_img_name(img_url)), 'wb') as f:
            f.write(response.content)
    
    response = requests.get(img_url.replace('shape1', 'shape2'))
    if response.status_code == 200:
        with open(os.path.join(output_directory, get_img_name(img_url.replace('shape1', 'shape2'))), 'wb') as f:
            f.write(response.content)
            
    response = requests.get(img_url.replace('shape1', 'shape3'))
    if response.status_code == 200:
        with open(os.path.join(output_directory, get_img_name(img_url.replace('shape1', 'shape3'))), 'wb') as f:
            f.write(response.content)
            

def download_invert_img(img_url, output_directory):
    response = requests.get(img_url)
    if response.status_code == 200:
        with open(os.path.join(output_directory, get_img_name(img_url)), 'wb') as f:
            f.write(response.content)
    
    response = requests.get(img_url.replace('shape1', 'shape2'))
    if response.status_code == 200:
        with open(os.path.join(output_directory, get_img_name(img_url.replace('shape1', 'shape2'))), 'wb') as f:
            f.write(response.content)
            
    response = requests.get(img_url.replace('shape1', 'shape3'))
    if response.status_code == 200:
        with open(os.path.join(output_directory, get_img_name(img_url.replace('shape1', 'shape3'))), 'wb') as f:
            f.write(response.content)
            

# 主要执行函数
if __name__ == "__main__":
    # 输入HTML文件路径
    input_html = 'Demo2.html'
    # 输出目录，保存生成的Vue组件
    output_directory = './output_vuexs'

    # 创建输出目录（如果不存在）
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    
    # 提取SVG并生成Vue组件
    for item in data:
        for brand in item.get('brand'):
            download_brand_img(brand, output_directory)
        for invert in item.get('invert'):
            download_invert_img(invert, output_directory)
