class AlibisController < ApplicationController
  before_action :set_alibi, only: [:show, :update, :destroy]

  # GET /alibis
  def index
    @alibis = Alibi.all

    render json: @alibis
  end

  # GET /alibis/1
  def show
    render json: @alibi
  end

  # POST /alibis
  def create
    @alibi = Alibi.new(alibi_params)

    if @alibi.save
      render json: @alibi, status: :created, location: @alibi
    else
      render json: @alibi.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /alibis/1
  def update
    if @alibi.update(alibi_params)
      render json: @alibi
    else
      render json: @alibi.errors, status: :unprocessable_entity
    end
  end

  # DELETE /alibis/1
  def destroy
    @alibi.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_alibi
      @alibi = Alibi.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def alibi_params
      params.require(:alibi).permit(:content, :valid)
    end
end
