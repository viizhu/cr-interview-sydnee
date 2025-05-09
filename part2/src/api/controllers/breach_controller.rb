class BreachController
  def create
    breaches = fetch_breaches(email)
  end
  
  private
  
  def fetch_breaches(email)
    uri = URI("https://hackcheck.woventeams.com/api/v4/breachedaccount/{email}")
    response = Net::HTTP.get_response(uri)

    if response.code == 200
      render json: { breached: true, data: response.parsed_response }
    elsif response.code == 404
      render json: { breached: false }
    else
      render json: { error: "API request failed", code: response.code }, status: :bad_gateway
    end
  end
end