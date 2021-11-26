class Api::V1::ExpressionsController < Api::V1::BaseController
  def index
    @expressions = policy_scope(Expression)
  end

  def show
    @expression = Expression.find(params[:id])
    authorize @expression
  end

  def create
    @participant = Participant.create!(meeting_id: params[:meeting_id])
    @meeting = Meeting.find(@participant.meeting_id)
    @expression = Expression.new(expression_params)
    @expression.participant = @participant
    authorize @expression

    if @expression.save
      render :show, status: :created

    MeetingChannel.broadcast_to(
      @meeting,
      render_to_string(partial: "expressions/expressions.html.erb", locals: { expression: @expression }, formats: [:html])
    )
    else
      render_error
    end
  end

  private

  def render_error
    render json: { errors: @expression.errors.full_messages },
      status: :unprocessable_entity
  end

  def expression_params
    params.require(:expression).permit(:confidence, :emotion)
  end
end
