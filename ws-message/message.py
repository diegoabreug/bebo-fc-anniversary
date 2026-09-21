# import pywhatkit as pwk

# # Send message to a contact (includes country code, e.g., +1 for US/DR)
# # Arguments: phone_number, message, hour (24h format), minute
# # pwk.sendwhatmsg("+18294991155", "Hello! This is a programmed message.", 19, 57)

# # Or send immediately (opens browser, waits for load, sends message)
# pwk.sendwhatmsg_instantly("+18294991155", "Hello! Sending right now.")

import pywhatkit as pwk
import pyautogui
import time

phone_number = "+18294991155"  # Replace with target number
message = "Hello! This is an automated message."

print("Opening WhatsApp Web...")
# Increased wait_time to 25s to guarantee the page loads completely
# pwk.sendwhatmsg_instantly(phone_number, message, wait_time=25, tab_close=False)
# ------------------------------
pwk.sendwhatmsg("+18294991155", "Hello! This is a programmed message.", 20, 6)

# Give a short delay, click enter explicitly via pyautogui
time.sleep(3)
pyautogui.press('enter')
print("Sent!")