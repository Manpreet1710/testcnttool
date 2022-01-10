
require 'yaml'
localeCode = Hash["english"=>"en","hindi"=>"hi","spanish"=>"es","italian"=>"it","french"=>"fr","tagalog"=>"en","swahili"=>"sw","urdu"=>"ur","malayalam"=>"ml","punjabi"=>"pa","farsi"=>"en","kinyarwanda"=>"en","puerto"=>"en","japanese"=>"ja","latin"=>"lv","irish"=>"en","tamil"=>"ta","amharic"=>"am","filipino"=>"fil","sanskrit"=>"sa","arabic"=>"ar","german"=>"de","vietnamese"=>"vi","marathi"=>"mr","pinyin"=>"en","pangungusap"=>"en","gujarati"=>"gu","telugu"=>"te","bengali"=>"bn"];
file_array = YAML.load(File.read("createFile.yml"))
#   file_array.each { 
#       |x| 
#       File.open( "translate/#{x}.md", 'w' ) do |the_file|
#           the_file.puts "--- \nlayout: translate \nfileName: translate_english_to_hindi \nfrom: en\nto: hi \npermalink: translate-#{x}-sentence-translation\n---"

#             end
#       }
    
