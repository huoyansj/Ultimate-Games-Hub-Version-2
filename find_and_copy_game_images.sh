#!/bin/bash

# 定义游戏列表
games=(
    "vex3" "vex4" "vex5" "vex6" "vex7"
    "run-3" "subway-surfers" "slope" "tunnelrush"
    "tanuki-sunset" "adanceoffireandice" "cubefield"
    "time-shooter" "time-shooter-3" "unfairmario" "underrun"
    "2048" "tetris" "rubikscube" "ovo" "hextris"
    "bloxorz" "minesweeper" "chess" "checkers"
    "connect3" "breaklock" "babel-tower"
    "pacman" "snake" "spaceinvaders" "tron"
    "asteroids" "breakout" "doodlejump" "flappybird"
    "chromedino" "mario-game"
    "cookieclicker" "sandspiel" "tiny-fishing" "bitlife"
    "idle-breakout" "doge-miner" "clicker-heroes-updated"
    "particle-clicker" "adarkroom" "monkey-mart"
    "qwop" "racer" "stickman-hook" "two-ball-3d"
    "smart-ball" "rooftop-snipers" "retrobowl"
    "drift-boss" "drive-mad" "subway-surfers-ny"
    "motox3m" "motox3m2"
)

# 查找并复制游戏图片的函数
find_and_copy_game_image() {
    local game_name="$1"
    local game_dir="$game_name"
    
    # 确保目录存在
    mkdir -p "$game_dir"
    
    # 查找图片的可能模式
    local image_patterns=(
        "*-512x512.jpeg"
        "*-512x512.jpg"
        "*-cover.jpg"
        "*-splash.jpg"
        "icon.jpg"
        "splash.jpg"
    )
    
    local image_found=false
    
    # 尝试查找并复制图片
    for pattern in "${image_patterns[@]}"; do
        local image_file=$(find "$game_dir" -type f -name "$pattern" | head -n 1)
        
        if [ -n "$image_file" ]; then
            cp "$image_file" "$game_dir/splash.jpg"
            echo "成功复制 $game_name 的图片: $image_file"
            image_found=true
            break
        fi
    done
    
    # 如果没有找到图片，使用默认图片
    if [ "$image_found" = false ]; then
        cp resources/game-default.svg "$game_dir/splash.jpg"
        echo "使用默认图片作为 $game_name 的封面"
    fi
}

# 处理所有游戏的图片
for game in "${games[@]}"; do
    find_and_copy_game_image "$game"
done

echo "游戏图片处理完成！" 