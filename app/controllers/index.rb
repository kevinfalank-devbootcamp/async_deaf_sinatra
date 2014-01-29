get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  input = params[:user_input]
  "Implement the /grandma route yourself.<br>Params: <code>#{params.inspect}</code>"
  # do some ruby
  if input.upcase != input
    answer = "SPEAK UP SONNY"
  else
    answer = "Whatever"
  end

  redirect "/?grandma=#{answer}"
end
