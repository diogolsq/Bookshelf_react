require 'digest/md5'
module GetThumbService
    class << self
        def get email
            email_address = email.downcase
            hash = Digest::MD5.hexdigest(email_address)
            image_src = "https://www.gravatar.com/avatar/#{hash}"

            return image_src
        end
    end
end