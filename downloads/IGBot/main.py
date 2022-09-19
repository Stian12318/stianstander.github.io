import random
from instagrapi import Client
with open("credentials.txt", "r") as f:
    ACCOUNT_USERNAME, ACCOUNT_PASSWORD = f.read().splitlines()

cl = Client()
cl.login(ACCOUNT_USERNAME, ACCOUNT_PASSWORD)

hashtag = "vegan"
comments = ["I like steak", "Who likes meat?", "Meat!"]

medias = cl.hashtag_medias_top(hashtag, 20)

for i, media in enumerate(medias):
    cl.media_like(media.id)
    print(f"Liked post number {i+1} of hashtag {hashtag}")
    if i % 5 == 0:
        cl.user_follow(media.user.pk)
        print(f"Followed user {media.user.username}")
        comment = random.choice(comments)
        cl.media_comment(media.id, comment)
        print(f"Commented {comment} under post number {i+1}")