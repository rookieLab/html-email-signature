from bs4 import BeautifulSoup
import os

data = {
    "facebook": "FacebookIcon",
    "linkedin": "LinkedinIcon",
    "twitter": "TwitterIcon",
    "instagram": "InstagramIcon",
    "youtube": "YoutubeIcon",
    "google-hangouts": "GooglehangoutsIcon",
    "google-play": "GoogleplayIcon",
    "tumblr": "TumblrIcon",
    "tripadvisor": "TripadvisorIcon",
    "github": "GithubIcon",
    "gitlab": "GitlabIcon",
    "stack-overflow": "OverflowIcon",
    "quora": "QuoraIcon",
    "behance": "BehanceIcon",
    "medium": "MediumIcon",
    "yelp": "YelpIcon",
    "qq": "QqIcon",
    "skype": "SkypeIcon",
    "slack": "SlackIcon",
    "flickr": "FlickrIcon",
    "google-drive": "GoogledriveIcon",
    "reverbnation": "ReverbnationIcon",
    "deviantart": "DeviantartIcon",
    "viadeo": "ViadeoIcon",
    "nextdoor": "NextdoorIcon",
    "weibo": "WeiboIcon",
    "wechat": "WechatIcon",
    "zillow": "ZillowIcon",
    "ello": "ElloIcon",
    "slideshare": "SlideshareIcon",
    "500px": "Icon500pxIcon",
    "blogger": "BloggerIcon",
    "myspace": "MyspaceIcon",
    "wordpress": "WordpressIcon",
    "trulia": "TruliaIcon",
    "renren": "RenrenIcon",
    "ravelry": "RavelryIcon",
    "dribbble": "DribbbleIcon",
    "vimeo": "VimeoIcon",
    "snapchat": "SnapchatIcon",
    "vk": "VkIcon",
    "ok": "OkIcon",
    "imdb": "ImdbIcon",
    "line": "LineIcon",
    "viber": "ViberIcon",
    "whatsapp": "WhatsappIcon",
    "kickstarter": "KickstarterIcon",
    "upwork": "UpworkIcon",
    "pinterest": "PinterestIcon",
    "product-hunt": "ProducthuntIcon",
    "calendly": "CalendlyIcon",
    "homify": "HomifyIcon",
    "airbnb": "AirbnbIcon",
    "shopify": "ShopifyIcon",
    "angellist": "AngellistIcon",
    "diaspora": "DiasporaIcon",
    "xing": "XingIcon",
    "houzz": "HouzzIcon",
    "telegram": "TelegramIcon",
    "reddit": "RedditIcon",
    "gitter": "GitterIcon",
    "meetup": "MeetupIcon",
    "ebay": "EbayIcon",
    "foursquare": "FoursquareIcon",
    "drupal": "DrupalIcon",
    "bitbucket": "BitbucketIcon",
    "soundcloud": "SoundcloudIcon",
    "mixcloud": "MixcloudIcon",
    "patreon": "PatreonIcon",
    "spotify": "SpotifyIcon",
    "apple": "AppleIcon",
    "amazon": "AmazonIcon",
    "etsy": "EtsyIcon",
    "tinder": "TinderIcon",
    "netflix": "NetflixIcon",
    "wikipedia": "WikipediaIcon",
    "bitcoin": "BitcoinIcon",
    "discord": "DiscordIcon",
    "rss": "RssIcon",
    "link": "LinkIcon",
    "map-1": "Map1Icon",
    "map-2": "Map2Icon",
    "location-1": "Location1Icon",
    "wetransfer": "WetransferIcon",
    "google-photos": "GooglephotosIcon",
    "deezer": "DeezerIcon",
    "zomato": "ZomatoIcon",
    "keybase": "KeybaseIcon",
    "aliexpress": "AliexpressIcon",
    "livejournal": "LivejournalIcon",
    "redfin": "RedfinIcon",
    "strava": "StravaIcon",
    "alibaba": "AlibabaIcon",
    "voxer": "VoxerIcon",
    "google": "GoogleIcon",
    "alignable": "AlignableIcon",
    "baidu": "BaiduIcon",
    "craigslist": "CraigslistIcon",
    "fundable": "FundableIcon",
    "homes": "HomesIcon",
    "residentadvisor": "ResidentadvisorIcon",
    "steam": "SteamIcon",
    "ask": "AskIcon",
    "freelancer": "FreelancerIcon",
    "squarespace": "SquarespaceIcon",
    "fiverr": "FiverrIcon",
    "issuu": "IssuuIcon",
    "mailchimp": "MailchimpIcon",
    "tracks": "TracksIcon",
    "homeadvisor": "HomeadvisorIcon",
    "trello": "TrelloIcon",
    "bandcamp": "BandcampIcon",
    "unsplash": "UnsplashIcon",
    "wix": "WixIcon",
    "filmweb": "FilmwebIcon",
    "bigger-pockets": "BiggerpocketsIcon",
    "paypal": "PaypalIcon",
    "goodreads": "GoodreadsIcon",
    "googlescholar": "GooglescholarIcon",
    "twitch": "TwitchIcon",
    "bloglovin": "BloglovinIcon",
    "bbb": "BbbIcon",
    "google-calendar": "GooglecalendarIcon",
    "booking": "BookingIcon",
    "kakaotalk": "KakaotalkIcon",
    "naver": "NaverIcon",
    "tiktok": "TiktokIcon",
    "crunchbase": "CrunchbaseIcon",
    "eventbrite": "EventbriteIcon",
    "microsoft-teams": "MicrosoftteamsIcon",
    "flipboard": "FlipboardIcon",
    "mixsocial": "MixsocialIcon",
    "appstore": "AppstoreIcon",
    "itunes": "ItunesIcon",
    "realtor": "RealtorIcon",
    "zoom": "ZoomIcon",
    "google-my-business": "GooglemybusinessIcon",
    "apple-podcast": "ApplepodcastIcon",
    "oncehub": "OncehubIcon",
    "messenger": "MessengerIcon",
    "bb": "BbIcon",
    "google-maps": "GooglemapsIcon",
    "spotlight": "SpotlightIcon",
    "tidal": "TidalIcon",
    "mewe": "MeweIcon",
    "actors-access": "ActorsaccessIcon",
    "marque": "MarqueIcon",
    "google-meet": "GooglemeetIcon",
    "signal": "SignalIcon",
    "proz": "ProzIcon",
    "zingword": "ZingwordIcon",
    "rumble": "RumbleIcon",
    "substack": "SubstackIcon",
    "linktree": "LinktreeIcon",
    "glassdoor": "GlassdoorIcon",
    "dropbox": "DropboxIcon",
    "twitter-x": "TwitterxIcon",
    "threads": "ThreadsIcon",
    "mastodon": "MastodonIcon",
    "bluesky": "BlueskyIcon",
    "tidycal": "TidycalIcon",
    "spotlight-2": "Spotlight2Icon",
    "kununu": "KununuIcon",
}

data  = {v:k for k,v in data.items()}

# 定义生成Vue组件的模板
def generate_vue_component(svg_content, icon_name):
    vue_template = f"""
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="100" height="100">
    {svg_content}
  </svg>
</template>

<script>
export default {{
  name: '{icon_name}',
}};
</script>

<style scoped>
/* 你可以在这里添加样式 */
svg {{
  width: 24px;
  height: 24px;
}}
</style>
    """
    return vue_template

# 从HTML文件中提取SVG并生成Vue组件
def extract_svgs_and_generate_components(html_file_path, output_dir):
    # 读取HTML文件内容
    with open(html_file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()

    # 使用BeautifulSoup解析HTML
    soup = BeautifulSoup(html_content, 'html.parser')

    # 查找所有包含SVG的<a>标签
    svg_tags = soup.find_all('masonry-item')

    # 遍历每个包含SVG的<a>标签并生成Vue组件
    for index, a_tag in enumerate(svg_tags):
        # 获取包含SVG的内容
        svg = a_tag.find('svg')
        if not svg:
            continue
        
        # 获取文件名（根据name属性或者默认的Icon+index）
        icon_name = a_tag.get('name', f'Icon{index + 1}').capitalize()

        # 生成Vue组件内容
        svg_content = str(svg)
        vue_component = generate_vue_component(svg_content, data.get(f"{icon_name}Icon", icon_name))

        # 定义Vue组件文件路径，使用name属性值
        vue_file_path = os.path.join(output_dir, f"{icon_name}Icon.vue")

        # 保存Vue组件到文件
        with open(vue_file_path, 'w', encoding='utf-8') as vue_file:
            vue_file.write(vue_component)
        
        print(f"生成 Vue 组件: {vue_file_path}")

# 主要执行函数
if __name__ == "__main__":
    # 输入HTML文件路径
    input_html = 'Demo.html'
    # 输出目录，保存生成的Vue组件
    output_directory = './output_vues'

    # 创建输出目录（如果不存在）
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    # 提取SVG并生成Vue组件
    extract_svgs_and_generate_components(input_html, output_directory)
