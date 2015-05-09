class Student < ActiveRecord::Base
  def to_s
    full_name
  end
end
