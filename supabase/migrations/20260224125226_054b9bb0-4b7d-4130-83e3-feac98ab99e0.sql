
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'General',
  emoji TEXT NOT NULL DEFAULT '📝',
  read_time TEXT NOT NULL DEFAULT '5 min read',
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published posts"
ON public.blog_posts FOR SELECT
USING (published = true);

-- Seed with existing blog data
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, emoji, read_time, published) VALUES
('Top 10 IPTV Apps for Android in 2024', 'top-10-iptv-apps-android-2024',
 'Discover the best IPTV players to get the most out of your subscription on Android devices...',
 '## Top 10 IPTV Apps for Android in 2024

Finding the right IPTV player can make a huge difference in your streaming experience. Here are the top 10 apps we recommend:

### 1. IPTV Smarters Pro
The most popular choice among IPTV users. It offers a clean interface, EPG support, and multi-screen viewing.

### 2. TiviMate
Known for its modern UI and excellent EPG integration. Perfect for users who want a premium experience.

### 3. Perfect Player
A lightweight yet powerful player with customizable interface and great codec support.

### 4. GSE Smart IPTV
Supports multiple playlist formats and offers built-in player with external player support.

### 5. OTT Navigator
Feature-rich with auto-update playlists, favorites, and catch-up TV support.

### 6. Televizo
A modern, ad-free IPTV player with material design and intuitive controls.

### 7. Sparkle TV
Great for beginners with easy setup and straightforward navigation.

### 8. XCIPTV Player
Offers Xtream Codes API support with a clean, user-friendly interface.

### 9. ImPlayer
Supports multiple formats and offers a sleek, modern interface.

### 10. Kodi with PVR Add-on
The most flexible option for advanced users who want full customization.

> All these apps work perfectly with PrimeIPTV subscriptions. Contact our support team for setup assistance!',
 'Guides', '📱', '5 min read', true),

('How to Watch Champions League on IPTV', 'watch-champions-league-iptv',
 'Complete guide to accessing all UEFA Champions League matches through your IPTV subscription...',
 '## How to Watch Champions League on IPTV

The UEFA Champions League is one of the most-watched football competitions in the world. Here''s how to catch every match with PrimeIPTV.

### Available Channels
With PrimeIPTV, you get access to all major sports channels broadcasting UCL matches:
- **beIN Sports** (all regions)
- **BT Sport** (UK)
- **CBS Sports** (USA)
- **DAZN** (multiple regions)
- **Canal+** (France)

### How to Set Up
1. Subscribe to any PrimeIPTV plan
2. Install your preferred IPTV player
3. Load your playlist/credentials
4. Navigate to the Sports category
5. Find your preferred UCL channel

### Match Schedule Tips
- Group stage matches typically air on Tuesday and Wednesday
- Knockout rounds follow a similar schedule
- Finals are usually on Saturday evenings

> PrimeIPTV offers all UCL matches in HD and 4K quality where available!',
 'Sports', '⚽', '4 min read', true),

('4K Streaming: Everything You Need to Know', '4k-streaming-guide',
 'Learn about the requirements for a perfect 4K streaming experience and how to optimize your setup...',
 '## 4K Streaming: Everything You Need to Know

4K streaming delivers four times the resolution of standard HD. Here''s what you need for the best experience.

### Requirements
- **Internet Speed**: Minimum 25 Mbps, recommended 50+ Mbps
- **Display**: 4K-compatible TV or monitor
- **Device**: Smart TV, Android box, or Fire Stick 4K
- **IPTV Player**: One that supports 4K codecs (H.265/HEVC)

### Optimizing Your Setup
1. Use a wired ethernet connection when possible
2. If using WiFi, ensure 5GHz band connectivity
3. Close background apps to free up bandwidth
4. Update your IPTV player to the latest version

### Common Issues & Fixes
- **Buffering**: Lower quality temporarily or check internet speed
- **No 4K option**: Ensure your device and player support 4K
- **Color issues**: Check HDR settings on your TV

> PrimeIPTV offers 500+ channels in 4K quality. Upgrade your viewing experience today!',
 'Technology', '🖥️', '6 min read', true),

('PrimeIPTV vs Competitors: Full Comparison', 'primeiptv-vs-competitors',
 'We compare PrimeIPTV with major competitors across price, channel count, stability, and support...',
 '## PrimeIPTV vs Competitors: Full Comparison

Choosing the right IPTV provider can be overwhelming. Here''s an honest comparison.

### Channel Count
| Provider | Channels | VOD |
|----------|----------|-----|
| PrimeIPTV | 17,000+ | 100,000+ |
| Competitor A | 10,000 | 50,000 |
| Competitor B | 12,000 | 60,000 |
| Competitor C | 8,000 | 30,000 |

### Stability & Uptime
PrimeIPTV maintains **99.9% uptime** with redundant servers across multiple regions. Most competitors average 95-98%.

### Customer Support
- **PrimeIPTV**: 24/7 live support via WhatsApp & Telegram
- **Competitors**: Often limited to email with 24-48h response times

### Pricing
PrimeIPTV offers the best value with plans starting at competitive rates, especially for longer subscriptions.

### Verdict
PrimeIPTV stands out with superior channel count, reliability, and customer support.',
 'Reviews', '📊', '8 min read', true),

('Setting Up IPTV on Smart TV: Step by Step', 'setup-iptv-smart-tv',
 'A comprehensive guide for installing and configuring IPTV on Samsung, LG, and Sony Smart TVs...',
 '## Setting Up IPTV on Smart TV

Follow these step-by-step instructions for your specific TV brand.

### Samsung Smart TV
1. Open the Samsung App Store
2. Search for "IPTV Smarters" or "Smart IPTV"
3. Install and open the app
4. Enter your PrimeIPTV credentials
5. Wait for the channel list to load
6. Start watching!

### LG Smart TV
1. Open the LG Content Store
2. Search for "SS IPTV" or "Smart IPTV"
3. Install the app
4. Launch and enter your M3U playlist URL
5. Channels will load automatically

### Sony Smart TV (Android TV)
1. Open Google Play Store
2. Search for "IPTV Smarters Pro"
3. Install and launch
4. Select "Login with Xtream Codes API"
5. Enter your PrimeIPTV credentials
6. Enjoy your channels!

### Troubleshooting
- **App not available**: Try sideloading via USB
- **Channels not loading**: Check your internet connection
- **Poor quality**: Ensure your TV is connected to 5GHz WiFi

> Need help? Contact PrimeIPTV support 24/7!',
 'Guides', '📺', '7 min read', true),

('Best Sports Channels Available on IPTV', 'best-sports-channels-iptv',
 'Complete breakdown of all sports channels available — from football and basketball to tennis and F1...',
 '## Best Sports Channels Available on IPTV

PrimeIPTV offers comprehensive sports coverage. Here''s what you can watch.

### Football
- beIN Sports (all packages)
- Sky Sports (Premier League, EFL)
- ESPN / ESPN+
- DAZN
- Canal+ Sport

### Basketball (NBA)
- NBA TV
- ESPN
- TNT Sports
- League Pass channels

### Tennis
- Tennis Channel
- Eurosport
- ESPN coverage during Grand Slams

### Formula 1
- Sky Sports F1
- ESPN (USA)
- Canal+ (France)
- F1 TV Pro channels

### MMA / Boxing
- UFC Fight Pass channels
- DAZN Boxing
- ESPN+ PPV
- Showtime Boxing

### Cricket
- Sky Sports Cricket
- Star Sports
- Willow TV

> All sports channels are available in HD and many in 4K. Subscribe to PrimeIPTV for the ultimate sports experience!',
 'Sports', '🏆', '5 min read', true);
