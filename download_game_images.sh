#!/bin/bash

# 定义游戏图片源
declare -A game_image_sources=(
    # 动作冒险游戏
    ["vex3"]="https://play-lh.googleusercontent.com/vex3-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NTkucG5n/original/qwerty.jpg"
    ["vex4"]="https://play-lh.googleusercontent.com/vex4-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NjAucG5n/original/qwerty.jpg"
    ["vex5"]="https://play-lh.googleusercontent.com/vex5-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NjEucG5n/original/qwerty.jpg"
    ["run-3"]="https://play-lh.googleusercontent.com/run3-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NjIucG5n/original/qwerty.jpg"
    ["subway-surfers"]="https://play-lh.googleusercontent.com/KtpIFNDBSq1kxMfqRfm0kP0pMN-Uic3gzKmz_iBOG4jUJkRNkJhRIzqMzRh_qUw1Ug=w240-h480"
    ["slope"]="https://play-lh.googleusercontent.com/slope-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NjMucG5n/original/qwerty.jpg"
    
    # 益智解谜游戏
    ["2048"]="https://play-lh.googleusercontent.com/2048-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NjQucG5n/original/qwerty.jpg"
    ["tetris"]="https://play-lh.googleusercontent.com/tetris-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NjUucG5n/original/qwerty.jpg"
    ["chess"]="https://play-lh.googleusercontent.com/chess-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NjYucG5n/original/qwerty.jpg"
    
    # 经典街机游戏
    ["pacman"]="https://play-lh.googleusercontent.com/pacman-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NjcucG5n/original/qwerty.jpg"
    ["snake"]="https://play-lh.googleusercontent.com/snake-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NjgucG5n/original/qwerty.jpg"
    
    # 休闲游戏
    ["cookieclicker"]="https://play-lh.googleusercontent.com/cookieclicker-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NjkucG5n/original/qwerty.jpg"
    ["bitlife"]="https://play-lh.googleusercontent.com/bitlife-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NzAucG5n/original/qwerty.jpg"
    
    # 技巧游戏
    ["qwop"]="https://play-lh.googleusercontent.com/qwop-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NzEucG5n/original/qwerty.jpg"
    ["stickman-hook"]="https://play-lh.googleusercontent.com/stickman-hook-cover.jpg https://img.itch.zone/aW1nLzYxMjM0NzIucG5n/original/qwerty.jpg"
)

# 下载函数
download_game_image() {
    local game_name="$1"
    local game_dir="$game_name"
    
    # 确保目录存在
    mkdir -p "$game_dir"
    
    # 查找 512x512 的 JPEG 图片
    local image_file=$(find "$game_dir" -type f -name "*-512x512.jpeg" | head -n 1)
    
    if [ -n "$image_file" ]; then
        # 如果找到图片，复制为 splash.jpg
        cp "$image_file" "$game_dir/splash.jpg"
        echo "成功复制 $game_name 的图片: $image_file"
    else
        # 如果没有找到图片，使用默认图片
        cp resources/game-default.svg "$game_dir/splash.jpg"
        echo "使用默认图片作为 $game_name 的封面"
    fi
}

# 动作冒险游戏
action_games=(
    "vex3" "vex4" "vex5" "vex6" "vex7"
    "run-3" "subway-surfers" "slope" "tunnelrush"
    "tanuki-sunset" "adanceoffireandice" "cubefield"
    "time-shooter" "time-shooter-3" "unfairmario" "underrun"
)

# 益智解谜游戏
puzzle_games=(
    "2048" "tetris" "rubikscube" "ovo" "hextris"
    "bloxorz" "minesweeper" "chess" "checkers"
    "connect3" "breaklock" "babel-tower"
)

# 经典街机游戏
arcade_games=(
    "pacman" "snake" "spaceinvaders" "tron"
    "asteroids" "breakout" "doodlejump" "flappybird"
    "chromedino" "mario-game"
)

# 休闲游戏
casual_games=(
    "cookieclicker" "sandspiel" "tiny-fishing" "bitlife"
    "idle-breakout" "doge-miner" "clicker-heroes-updated"
    "particle-clicker" "adarkroom" "monkey-mart"
)

# 技巧游戏
skill_games=(
    "qwop" "racer" "stickman-hook" "two-ball-3d"
    "smart-ball" "rooftop-snipers" "retrobowl"
    "drift-boss" "drive-mad" "subway-surfers-ny"
    "motox3m" "motox3m2"
)

# 下载所有游戏图片
for game in "${action_games[@]}" "${puzzle_games[@]}" "${arcade_games[@]}" "${casual_games[@]}" "${skill_games[@]}"; do
    download_game_image "$game"
done

echo "游戏图片处理完成！" 