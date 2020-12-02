class SuspectsController < ApplicationController
  before_action :set_suspect, only: [:show, :update, :destroy]

  # GET /suspects
  def index
    @suspects = Suspect.all

    render json: @suspects
  end

  # GET /suspects/1
  def show
    render json: @suspect
  end

  # POST /suspects
  def create
    @suspect = Suspect.new(suspect_params)

    if @suspect.save
      render json: @suspect, status: :created, location: @suspect
    else
      render json: @suspect.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /suspects/1
  def update
    if @suspect.update(suspect_params)
      render json: @suspect
    else
      render json: @suspect.errors, status: :unprocessable_entity
    end
  end

  # DELETE /suspects/1
  def destroy
    @suspect.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_suspect
      @suspect = Suspect.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def suspect_params
      params.require(:suspect).permit(:name, :weapon, :alibi, :dunnit)
    end
end
