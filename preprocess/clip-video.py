import moviepy.editor as mpy
from moviepy.video.fx.all import crop

filenames = [
    'variable-inspector',
]
''' The bounding box for the workflow canvas
x1 = 30
y1 = 185
x2 = 1422
y2 = 934
'''
''' The bounding box for the module settings or variable inspector panel'''
x1 = 1330
y1 = 233
x2 = 1885
y2 = 934

for filename in filenames:
    source = f'{filename}.mp4'
    target = f'{filename}.gif'
    clip = mpy.VideoFileClip(source)
    cropped_clip = crop(
        clip,
        x1=x1,
        y1=y1,
        x2=x2,
        y2=y2
    )
    # cropped_clip.write_videofile(target)
    cropped_clip.write_gif(target)
